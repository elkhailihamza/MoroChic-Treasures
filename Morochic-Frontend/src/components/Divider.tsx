interface DividerProps {
  className?: string;
  height?: string;
}

export const Divider = ({ className, height = "1.5px" }: DividerProps) => {
  return (
    <hr
      className={`border-0 bg-gray-700/30 ${className}`}
      style={{ height: height }}
    />
  );
};
