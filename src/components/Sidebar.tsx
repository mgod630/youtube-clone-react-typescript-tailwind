import * as Icon from "react-feather";
import SidebarItem from "./SidebarItem";
const Sidebar = () => {
    return (
        <>
            <ul className="px-2">
                <SidebarItem title="Home">
                    <Icon.Home size={20} />
                </SidebarItem>
                <SidebarItem title="Shorts">
                    <Icon.Video size={20} />
                </SidebarItem>
                <SidebarItem title="Subscription">
                    <Icon.Monitor size={20} />
                </SidebarItem>
                <SidebarItem title="You">
                    <Icon.Cast size={20} />
                </SidebarItem>
            </ul>
        </>
    );
};
export default Sidebar;
