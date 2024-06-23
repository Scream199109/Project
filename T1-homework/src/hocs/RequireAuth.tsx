import {getUserAuthData} from "entities/user/selectors/getUserAuthData";
import {ReactNode} from "react";
import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";

type Props = {
  children: ReactNode;
}

const RequireAuth = ({children}: Props) => {
  const location = useLocation();
  const user = useSelector(getUserAuthData);

  if (!user) {
    return <Navigate to='/login' state={{from: location}} replace />
  }

  return children
};

export default RequireAuth;
