interface InputProps {
  className?: string;
  name: string;
  required?: boolean;
  autoComplete?: string;
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
function Input({ className, name, placeholder="placeholder", type="text", required=false, autoComplete }: InputProps) {
  return (
    <input
      type={type}
      name={name}
      required={required}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className={className + " w-full outline-none"}
    />
  );
}

export default Input;
