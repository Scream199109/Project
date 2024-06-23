import Navbar from 'components/layout/navbar/Navbar';
import LoginForm from './login-form/LoginForm';

const AuthPage = () => {
  return (
    <>
      <Navbar size='m' />
      <LoginForm />
    </>
  );
};

export default AuthPage;
