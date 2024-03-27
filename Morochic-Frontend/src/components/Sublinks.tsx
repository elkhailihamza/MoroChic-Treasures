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
      <div className="mb-[8px]">
        <h1 className="lg:text-[20px] md:text-[16px] text-[13px] font-medium dm-sans">
          {header}
        </h1>
      </div>
      <div className="flex sm:flex-col sm:gap-1 gap-x-3 sm:flex-nowrap flex-wrap">
        {links.map((link, index) => (
          <div key={index}>
            <a
              className="lg:text-[16px] md:text-[13px] text-[11px] hover:underline text-[#E5E5E5]/75"
              href={link.href}
            >
              {link.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
