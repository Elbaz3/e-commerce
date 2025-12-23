import { useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const { pathname } = useLocation();

  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="flex gap-2 text-sm">
      <a href="/" className="text-gray-400">
        Home
      </a>

      {segments.map((segment, i) => {
        const path = "/" + segments.slice(0, i + 1).join("/");

        return (
          <span key={path} className="flex gap-2">
            <span className="text-gray-300">/</span>
            <a
              href={path}
              className={
                i === segments.length - 1
                  ? "text-black font-medium"
                  : "text-gray-400"
              }
            >
              {segment.charAt(0).toUpperCase() +
                segment.slice(1).replace("-", " ")}
            </a>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
