import React, { ReactNode } from "react";

interface ItemCardProps {
  children?: ReactNode;
  image?: string;
  alt?: string;
  className?: string;
  base?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const ItemCard = ({
  children,
  image,
  alt = "img",
  className,
  base = true,
  onClick,
}: ItemCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`${className} ${
        base ? "sm:w-44 w-36 sm:h-64 h-48" : ""
      } bg-gray-300 cursor-pointer rounded-sm shadow-sm overflow-hidden`}
    >
      <img className="w-full h-full object-cover" src={image} alt={alt} />
      {children}
    </div>
  );
};
