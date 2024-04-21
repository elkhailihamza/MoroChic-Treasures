import React, { forwardRef } from 'react';

interface InputProps {
  className?: string;
  name: string;
  required?: boolean;
  autoComplete?: string;
  max?: number;
  min?: number;
  id?: string;
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
  ref?: React.Ref<HTMLInputElement>;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
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
  id,
  onChange,
}, ref) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      ref={ref}
      maxLength={max}
      minLength={min}
      value={value}
      required={required}
      disabled={disabled}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className={`${className} w-full outline-none focus:rounded-none p-2 border-2 border-slate-950 bg-[#FEFAE0]`}
      onChange={onChange}
    />
  );
});
