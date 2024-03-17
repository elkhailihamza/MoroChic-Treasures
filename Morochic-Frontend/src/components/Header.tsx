interface headerProps {
  className: string;
  header: string;
}

const Header = ({ className, header }: headerProps) => {
  return <h1 className={className}>{header}</h1>;
};

export default Header;
