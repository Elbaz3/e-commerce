import { Suspense } from "react";

const PageSuspenseFallback = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default PageSuspenseFallback;
