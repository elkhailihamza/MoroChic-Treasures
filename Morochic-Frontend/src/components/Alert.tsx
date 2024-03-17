interface Props {
    children: string;
}

const Alert = ({children}: Props) => {
  return (
    <div className="bg-red-600 w-[200px]">
      <span>{children}</span>
    </div>
  );
};

export default Alert;
