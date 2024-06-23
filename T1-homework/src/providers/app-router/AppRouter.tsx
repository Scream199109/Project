import Layout from "components/layout/Layout";
import {getUserAuthData} from "entities/user/selectors/getUserAuthData";
import RequireAuth from "hocs/RequireAuth";
import AuthPage from "pages/auth-page/AuthPage";
import {Suspense} from "react";
import {useSelector} from "react-redux";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {routeConfig} from "../router/config/routeConfig";

const AppRouter = () => {

  const user = useSelector(getUserAuthData);

  const {pathname} = useLocation();

  // отсекаем логин и логаут
  // на них не делаем редирект
  const matcher = /^\/$|^\/log(in|out)/;
  const getCurrentLocation = (): string | undefined => {
    const currentLocation = pathname;
    if (currentLocation.match(matcher)) return;
    return currentLocation;
  }

  const initialLocation: string | undefined = getCurrentLocation();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {Object.values(routeConfig).map(({element, path}) => (
            <Route
              key={path}
              path={path}
              element={
                <RequireAuth>
                  {element}
                </RequireAuth>
              }
            />
          ))}
          <Route path="/login" element={user ? <Navigate to={initialLocation || '/'} replace /> : <AuthPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
