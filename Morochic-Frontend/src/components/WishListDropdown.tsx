interface WishListDropdownProps {
  id: string;
  open?: boolean;
}

export const WishListDropdown = ({
  id,
  open = false,
}: WishListDropdownProps) => {
  return (
    <div
      id={id}
      className={`z-10 ${
        open ? "block" : "hidden"
      } bg-white divide-y divide-gray-100 rounded-lg shadow w-72 absolute left-0 top-20`}
    ></div>
  );
};
