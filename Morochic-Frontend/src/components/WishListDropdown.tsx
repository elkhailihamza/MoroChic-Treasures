import { ReactNode } from "react";
import { useUser } from "../contexts/UserContext";

interface WishListDropdownProps {
  id: string;
  children?: ReactNode;
}

export const WishListDropdown = ({ id, children }: WishListDropdownProps) => {
  const { wishlist } = useUser();
  return (
    <div
      id={id}
      className="hidden select-none bg-white divide-y divide-gray-100 mt-20 rounded-lg shadow w-80 h-96 border border-slate-600 border-2 border-slate-950 bg-[#FEFAE0]"
      style={{ zIndex: 9999 }}
    >
      <div className="flex flex-col h-96">
        <div className="p-3 text-center border-b-2 border-slate-200">
          <h1>WishList</h1>
        </div>
        <div className="h-10 p-4 border-b flex justify-between items-center">
          <h1>Items</h1>
          <span>{Array.isArray(wishlist) ? wishlist.length : "0"}</span>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};
