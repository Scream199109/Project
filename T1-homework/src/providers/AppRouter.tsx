import Layout from "components/layout/Layout";
import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "./router/config/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {Object.values(routeConfig).map(({element, path}) => (
            <Route
              key={path}
              path={path}
              element={element}
            />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
