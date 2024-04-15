import { ReactNode } from "react";

interface DropdownProps {
    header?: ReactNode;
    children: ReactNode;
    className: string;
    id?: string;
}

const Dropdown = ({header = "Header", children, id = "dropdown", className}: DropdownProps) => {
  return (
    <div
      id={id}
      className={className}
    >
      <div className="px-4 py-3 text-sm text-gray-900 text-center">
        {header}
      </div>
        {children}
    </div>
  );
};

export default Dropdown;
