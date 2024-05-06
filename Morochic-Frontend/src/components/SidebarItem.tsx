import { ReactNode } from "react";
import { Link } from "react-router-dom";

// children property is only for svgs!

interface SidebarItemProps {
  svg?: ReactNode;
  to?: string;
  header?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const SidebarItem = ({
  svg = "svg",
  to = "#",
  header = "Sidebar-Header",
  onClick,
}: SidebarItemProps) => {
  return (
    <Link
      to={to}
      className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-200 hover:text-gray-900 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
      onClick={onClick}
    >
      <div className="grid mr-4 place-items-center">{svg}</div>
      {header}
    </Link>
  );
};

export default SidebarItem;
