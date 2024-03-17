interface InputProps {
  className: string;
  name: string;
  type:
    | "text"
    | "password"
    | "number"
    | "email"
    | "tel"
    | "date"
    | "time"
    | "checkbox"
    | "radio"
    | "file"
    | "submit"
    | "reset"
    | "button";
  placeholder: string;
}
function Input({ className, name, placeholder }: InputProps) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className={className + " w-full"}
    />
  );
}

export default Input;
