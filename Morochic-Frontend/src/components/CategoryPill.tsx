interface CategoryPillProps {
  className?: string;
  text: string;
}
export const CategoryPill = ({ className, text }: CategoryPillProps) => {
  return (
    <div
      className={`${className} flex hover:bg-gray-300 justify-center items-center rounded-full py-1 px-7 cursor-pointer bg-gray-200`}
    >
      <h1>{text}</h1>
    </div>
  );
};
