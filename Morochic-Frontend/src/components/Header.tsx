interface headerProps {
  className: string;
  children: string;
}

const Header = ({ className, children }: headerProps) => {
  return <h1 className={className}>{children}</h1>;
};

export default Header;
