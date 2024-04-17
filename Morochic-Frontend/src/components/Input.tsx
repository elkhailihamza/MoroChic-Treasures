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
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}
export const Input = ({
  className,
  name,
  placeholder = "placeholder",
  type = "text",
  required = false,
  autoComplete,
  max,
  min,
  value,
  disabled,
  onChange,
}: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      maxLength={max}
      minLength={min}
      value={value}
      required={required}
      disabled={disabled}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className={className + " w-full outline-none"}
      onChange={onChange}
    />
  );
};
