import { Button, useToast } from '@chakra-ui/react';
import { create } from 'ipfs-http-client';
import { useRef } from 'react';
const all = require('it-all')

const ipfs = create('https://ipfs.infura.io:5001/api/v0')
window.ipfs = ipfs;
function IpfsFileUploader({ children, onClick, onCancel, result, accept, ...rest }) {
  const inputEl = useRef(null);
  const toast = useToast();
  function charge() {
    document.body.onfocus = () => {
      setTimeout(() => {
        if (inputEl.current.value.length === 0) {
          document.body.onfocus = null
          onCancel();
        }
      }, 1000);
    }
  }
  async function onChange(e) {
    try {
      let file3DName;
      let file3DCount = 0;
      let fileObjectsArray = Array.from(e.target.files).map((file) => {
        let ext = file.name.split(".").pop().toLowerCase();
        if (["fbx", "gltf"].indexOf(ext) > -1) {
          file3DName = file.name;
          file3DCount++;
        }
        return {
          path: file.name,
          content: file
        }
      })
      if (file3DCount !== 1) throw new Error("Please choose .fbx or .gltf");
      const results = await all(
        ipfs.addAll(fileObjectsArray, { wrapWithDirectory: true })
      )
      console.log(results)
      const length = results.length
      const FilesHash = results[length - 1].cid._baseCache.get('z')
      const FilesUrl = 'https://ipfs.infura.io/ipfs/' + FilesHash
      console.log(FilesUrl)
      result(FilesUrl + "/" + file3DName);
    } catch (error) {
      toast({
        title: 'Error Upload File',
        description: error,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
    finally {
      inputEl.current.value = "";
    }
  }
  return (
    <>
      <Button {...rest} onClick={() => {
        inputEl.current.click()
        onClick();
        charge();
      }} >{children}</Button>
      <input ref={inputEl} style={{ display: "none" }} accept={accept}
        type="file" multiple
        onChange={onChange}
      />
    </>
  );
}

export default IpfsFileUploader