interface btnProps {
  className?: string;
  type?: "submit" | "reset" | "button";
  children?: string;
  color?: string;
}

const Button = ({
  className,
  type = "button",
  children,
  color = "#BC6C25",
}: btnProps) => {
  return (
    <button type={type} className={className + ' bg-[' + color + ']'}>
      {children}
    </button>
  );
};

export default Button;
