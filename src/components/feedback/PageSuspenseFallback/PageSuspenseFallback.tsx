import { Suspense } from "react";

const PageSuspenseFallback = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<div className="page-loader"></div>}>
      {children}
    </Suspense>
  );
};

export default PageSuspenseFallback;
