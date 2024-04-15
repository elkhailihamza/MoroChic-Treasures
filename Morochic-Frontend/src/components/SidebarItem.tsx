import { ReactNode } from "react";

// children property is only for svgs!

interface SidebarItemProps {
  svg?: ReactNode;
  href?: string;
  header?: string;
}

const SidebarItem = ({svg = "svg", href = "#", header = "Sidebar-Header"}: SidebarItemProps) => {
  return (
    <a
      href={href}
      className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-200 hover:text-gray-900 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
    >
      <div className="grid mr-4 place-items-center">
        {svg}
      </div>
      {header}
    </a>
  );
};

export default SidebarItem;
