interface InputProps {
  className?: string;
  name: string;
  required?: boolean;
  type?:
    | "text"
    | "password"
    | "number"
    | "email"
    | "search"
    | "tel"
    | "date"
    | "time"
    | "checkbox"
    | "radio"
    | "file"
    | "submit"
    | "reset"
    | "button";
  placeholder?: string;
}
function Input({ className, name, placeholder="placeholder", type="text", required=false }: InputProps) {
  return (
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      className={className + " w-full outline-none"}
    />
  );
}

export default Input;
