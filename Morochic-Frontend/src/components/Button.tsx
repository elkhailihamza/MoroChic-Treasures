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
  color="#BC6C25",
  base = true,
}: btnProps) => {
  return (
    <button type={type} style={{ backgroundColor: color }} className={`${className} ${base && " lg:py-[16px] lg:px-[20px] md:py-[16px] md:px-[16px] md:text-[16px] py-[13px] px-[13px] text-[13px] font-semibold rounded text-white hover:underline"}`}>
      {children}
    </button>
  );
};

export default Button;
