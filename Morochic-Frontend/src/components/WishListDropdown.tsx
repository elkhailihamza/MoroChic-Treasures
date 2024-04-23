import { ReactNode } from "react";

interface WishListDropdownProps {
  id: string;
  children?: ReactNode;
}

export const WishListDropdown = ({
  id,
  children,
}: WishListDropdownProps) => {
  return (
    <div
      id={id}
      className="hidden select-none bg-white divide-y divide-gray-100 mt-20 rounded-lg shadow w-80 h-96 border border-slate-600 mt-40 border-2 border-slate-950 bg-[#FEFAE0]"
      style={{ zIndex: 9999 }}
    >
      <div className="p-3 text-center border-b-2 border-slate-200">
        <h1>WishList</h1>
      </div>
      <div className="h-full">{children}</div>
    </div>
  );
};
