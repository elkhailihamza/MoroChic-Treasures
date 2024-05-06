import React from "react";

interface TextareaProps {
  className?: string;
  name: string;
  required?: boolean;
  id?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  ref?: React.Ref<HTMLTextAreaElement>;
  maxLength?: number;
  resize?: boolean;
  base?: boolean;
}
export const Textarea = ({
  className,
  name,
  placeholder = "placeholder",
  maxLength = 255,
  required = false,
  value,
  disabled,
  id,
  onChange,
  resize = true,
  base = true,
}: TextareaProps) => {
  return (
    <textarea
      className={`${!resize && "resize-none "}${className} ${
        base
          ? "w-full outline-none focus:rounded-none px-2 py-1  rounded-sm border-2 border-slate-950 bg-[#FEFAE0]"
          : ""
      }`}
      placeholder={placeholder}
      name={name}
      id={id}
      required={required}
      value={value}
      disabled={disabled}
      onChange={onChange}
      maxLength={maxLength}
    ></textarea>
  );
};
