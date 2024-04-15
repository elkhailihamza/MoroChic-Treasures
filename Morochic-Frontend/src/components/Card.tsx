import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  image?: string;
  alt?: string;
  className?: string;
}

export const Card = ({
  children,
  image,
  alt = "img",
  className,
}: CardProps) => {
  return (
    <div className={className}>
      <img className="mb-0" src={image} alt={alt} />
      {children}
    </div>
  );
};
