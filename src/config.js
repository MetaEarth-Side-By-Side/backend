export const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoibmV4dGVhcnRoIiwiYSI6ImNrcWF2YmVtcTBjaTIydmsxMnVvNmk3aGYifQ.mDtuHWG2eeALeo8b0PvK_w"
export const BACKEND_URL = "https://data.metaearth.sbs/"
export const COINEX_TEST_RPC = "https://testnet-rpc.coinex.net"
export const COINEX_CHAINID = 53
export const MEST_ADD = "0xf74bFB6FA061B482487170FD6e2ac11bC42e8514"
export const MEST_ABI = ["function balanceOf(address) view returns (uint)",
    "function TILE_PRICE() view public returns(uint)",
    "function buyTiles(uint[] memory tiles) payable public",
    "function getTokenIdOfTiles(uint[] memory tiles) public view  returns (uint[] memory)",
    "function ownerOf(uint256 tokenId) public view returns (address)",
    "function getTilesFromTokenId(uint tokenId) public view returns(uint[] memory)",
    "function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)",
    "function totalSupply() external view returns (uint256)",
    "function tokenByIndex(uint256 index) external view returns (uint256)"
]
export const EXPLORER_URL="https://testnet.coinex.net/"
export const ESTATE_URI_URL="https://data.metaearth.sbs/shoot"
export const VR_API_URL="https://data.metaearth.sbs/"