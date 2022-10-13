import EditEstateVR from '../components/EstateEditor/EditEstateVR'
import SidebarWithHeader from '../components/Nav/SidebarWithHeader'

export default function EstateVREdit() {
    return (
        <SidebarWithHeader>
            <EditEstateVR isEdit="true"/>
        </SidebarWithHeader>
    )
}