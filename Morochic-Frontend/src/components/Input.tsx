interface InputProps {
  className: string;
  name: string;
  placeholder: string;
}
function Input({ className, name, placeholder }: InputProps) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className={className}
    />
  );
}

export default Input;
