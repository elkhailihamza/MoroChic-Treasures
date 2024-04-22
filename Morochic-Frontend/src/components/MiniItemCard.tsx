import { ReactNode } from "react";

interface MiniItemCard {
  children?: ReactNode;
  image?: string;
  alt?: string;
  className?: string;
}

export const MiniItemCard = ({
  children,
  image,
  alt = "img",
  className,
}: MiniItemCard) => {
  return (
    <div className={`${className} w-32 h-20 bg-gray-300`}>
      <img className="w-full h-full object-cover" src={image} alt={alt} />
      {children}
    </div>
  );
};
