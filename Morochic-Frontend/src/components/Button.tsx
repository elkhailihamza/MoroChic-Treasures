interface btnProps {
  className: string;
  type: "submit" | "reset" | "button";
  children: string;
}

const Button = ({
  className,
  type,
  children = "Submit",
}: btnProps) => {
  return (
    <button type={type} className={className + ' w-full'}>
      {children}
    </button>
  );
};

export default Button;
