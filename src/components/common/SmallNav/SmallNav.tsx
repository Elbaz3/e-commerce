interface BreadcrumbProps {
  items: string[];
}

const SmallNav = ({ items }: BreadcrumbProps) => {
  return (
    <div className="flex items-center gap-2 text-sm max-md:text-xs -mb-10">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <span
            className={
              i === items.length - 1
                ? "font-medium text-black"
                : "text-gray-400"
            }
          >
            {item}
          </span>
          {i !== items.length - 1 && <span className="text-gray-300">/</span>}
        </span>
      ))}
    </div>
  );
};

export default SmallNav;
