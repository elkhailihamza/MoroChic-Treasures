interface DividerProps {
  divide?: boolean;
}

export const Divider = ({ divide = false }: DividerProps) => {
  return (
    <div className="my-10 px-5">
      {divide && <hr className="h-[1px] border-0 bg-gray-700/30" />}
    </div>
  );
};
