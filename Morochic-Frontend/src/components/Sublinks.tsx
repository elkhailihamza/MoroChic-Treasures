interface SublinksProps {
  header?: string;
  links: Links[];
}

interface Links {
  href?: string;
  name?: string;
}

export const Sublinks = ({ header, links }: SublinksProps) => {
  return (
    <div className="text-white whitespace-nowrap">
      <div>
        <h1 className="text-[20px] font-medium dm-sans">{header}</h1>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        {links.map((link, index) => (
          <div key={index}>
            <a className="hover:underline text-[#E5E5E5]/75" href={link.href}>
              {link.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
