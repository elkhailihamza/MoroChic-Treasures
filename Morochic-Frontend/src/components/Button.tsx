interface btnProps {
  className: string;
  type: "submit" | "reset" | "button";
  color?: string;
  children: string;
  onClick: () => void;
}

const Button = ({
  className,
  type,
  color = "BC6C25",
  children = "Submit",
  onClick,
}: btnProps) => {
  return (
    <button type={type} className={className + " bg-[#" + color + "]"} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
