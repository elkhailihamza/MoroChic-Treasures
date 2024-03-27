interface btnProps {
  className?: string;
  type?: "submit" | "reset" | "button";
  children?: string;
  color?: string;
  base?: boolean;
}

const Button = ({
  className,
  type = "button",
  children,
  color = "#BC6C25",
  base = true,
}: btnProps) => {
  return (
    <button type={type} className={`${className} ${base && "lg:py-[30px] lg:px-[24px] lg:text-[20px] md:py-[16px] md:px-[16px] md:text-[16px] py-[13px] px-[8px] text-[13px] font-semibold rounded text-white hover:underline"} bg-[${color}]`}>
      {children}
    </button>
  );
};

export default Button;
