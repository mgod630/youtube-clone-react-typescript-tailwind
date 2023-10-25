type SidebarItemProps = {
    title: string;
    children: React.ReactNode;
};

const SidebarItem = ({ title, children }: SidebarItemProps) => {
    return (
        <li className="flex flex-col items-center mb-2 hover:bg-gray-100 cursor-pointer p-2 py-3 rounded-md duration-300">
            {children}
            <p className="text-xs">{title}</p>
        </li>
    );
};
export default SidebarItem;
