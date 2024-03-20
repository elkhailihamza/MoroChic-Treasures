interface btnProps {
  className: string;
  type: "submit" | "reset" | "button";
  color?: string;
  children: string;
}

const Button = ({
  className,
  type,
  color = "BC6C25",
  children = "Submit",
}: btnProps) => {
  return (
    <button type={type} className={className + " bg-[#" + color + "]"}>
      {children}
    </button>
  );
};

export default Button;
