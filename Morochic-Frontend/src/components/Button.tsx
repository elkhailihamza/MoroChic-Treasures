import React, { ReactNode } from "react";

interface btnProps {
  className?: string;
  type?: "submit" | "reset" | "button";
  children?: ReactNode;
  color?: string;
  base?: boolean;
  onMouseOver?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseOut?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  className,
  type = "button",
  children,
  color = "#BC6C25",
  base = true,
  onMouseOver,
  onMouseOut,
  onClick,
}: btnProps) => {
  return (
    <button
      type={type}
      // style={{ backgroundColor: color }}
      className={`${className + " " + color} ${
        base &&
        " lg:py-[16px] lg:px-[20px] md:py-[16px] md:px-[16px] md:text-[16px] py-[13px] px-[13px] text-[13px] font-semibold rounded text-white hover:underline"
      }`}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
