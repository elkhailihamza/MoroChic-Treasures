import { ReactNode } from "react";

interface ItemCardProps {
  children?: ReactNode;
  image?: string;
  alt?: string;
  className?: string;
  base?: boolean;
}

export const ItemCard = ({
  children,
  image,
  alt = "img",
  className,
  base = true,
}: ItemCardProps) => {
  return (
    <div className={`${className} ${base ? ('sm:w-44 w-36 sm:h-64 h-48') : ('w-full h-full')} bg-gray-300 cursor-pointer rounded-sm shadow-sm`}>
      <img className="w-full h-full object-cover" src={image} alt={alt} />
      {children}
    </div>
  );
};
