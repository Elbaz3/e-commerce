import { useLocation, useNavigate } from "react-router-dom";
import { lazy, Suspense } from "react";

const Menu = lazy(() =>
  import("antd/lib/menu").then((m) => ({ default: m.default }))
);

const categories = [
  {
    label: "Woman’s Fashion",
    key: "women",
    children: ["Dresses", "Shoes", "Accessories"],
  },
  {
    label: "Men’s Fashion",
    key: "men",
    children: ["Shirts", "Shoes", "Watches"],
  },
  {
    label: "Electronics",
    key: "electronics",
  },
  {
    label: "Home & Lifestyle",
    key: "home",
  },
  {
    label: "Medicine",
    key: "medicine",
  },
  {
    label: "Sports & Outdoor",
    key: "sports",
    children: ["Bikes", "Gym", "Camping"],
  },
  {
    label: "Baby’s & Toys",
    key: "baby",
  },
  {
    label: "Groceries & Pets",
    key: "groceries",
  },
  {
    label: "Health & Beauty",
    key: "beauty",
  },
];

const CategoryFilter = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const currentKey = pathname.split("/").pop();

  return (
    <Suspense fallback={<div className="h-24" />}>
      <Menu
        mode="inline"
        selectedKeys={[currentKey || ""]}
        className="border-none bg-transparent"
        onClick={({ key }) => navigate(`/categories/products/${key}`)}
        items={categories.map((item) => {

          if (item.children) {
            return {
              key: item.key,
              label: (
                <div className="flex items-center justify-between">
                  <span>{item.label}</span>
                </div>
              ),
              children: item.children.map((child) => ({
                key: child.toLowerCase(),
                label: child,
                onClick: () =>
                  navigate(
                    `/categories/products/${item.key}/${child.toLowerCase()}`
                  ),
              })),
            };
          }

          // Normal item
          return {
            key: item.key,
            label: item.label,
          };
        })}
      />
    </Suspense>
  );
};

export default CategoryFilter;
