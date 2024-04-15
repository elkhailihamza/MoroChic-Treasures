interface InputProps {
  className?: string;
  name: string;
  required?: boolean;
  autoComplete?: string;
  max?: number;
  min?: number;
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
function Input({
  className,
  name,
  placeholder = "placeholder",
  type = "text",
  required = false,
  autoComplete,
  max,
  min,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      maxLength={max}
      minLength={min}
      required={required}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className={className + " w-full outline-none"}
    />
  );
}

export default Input;
