import {userActions} from "entities/user/slice/userSlice";
import {useAppDispatch} from "hooks/useAppDispatch/useAppDispatch";
import AppRouter from "providers/app-router/AppRouter";
import {useEffect} from "react";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch]);

  return (
    <div className="app">
      <AppRouter />
    </div>
  )
}

export default App
