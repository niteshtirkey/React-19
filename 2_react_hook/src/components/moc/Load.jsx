import React from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

const Load = () => {
  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </React.Suspense>
    </div>
  );
};

export default Load;
