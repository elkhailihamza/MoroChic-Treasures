import { ReactNode } from "react";

interface FullSizeItemCard {
  children?: ReactNode;
  image?: string;
  alt?: string;
  className?: string;
}

export const FullSizeItemCard = ({
  children,
  image,
  alt = "img",
  className,
}: FullSizeItemCard) => {
  return (
    <div className={`${className} w-full h-96 bg-gray-300`}>
      <img className="w-full h-full object-cover" src={image} alt={alt} />
      {children}
    </div>
  );
};
