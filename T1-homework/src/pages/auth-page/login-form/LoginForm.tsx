import {Button} from 'components/shared/buttons/Button';
import Input from 'components/shared/input/Input';
import {Text} from 'components/shared/text/Text';
import {getUserAuthData} from 'entities/user/selectors/getUserAuthData';
import {useAppDispatch} from 'hooks/useAppDispatch/useAppDispatch';
import {memo, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {getLoginState} from '../selectors/getLoginState/getLoginState';
import {loginByUsername} from '../services/loginByUsername/loginByUsername';
import {loginActions} from '../slice/loginSlice';
import cls from './LoginForm.module.scss';

const LoginForm = memo(() => {

  const dispatch = useAppDispatch();

  const {username, password, isLoading, error} = useSelector(getLoginState);

  const user = useSelector(getUserAuthData);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({username, password}));
  }, [dispatch, username, password])

  return (
    <div className={cls.wrapper}>
      {error && <Text variant='danger'>{error}</Text>}
      <Input
        type='text'
        placeholder='Login'
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type='password'
        placeholder='Password'
        onChange={onChangePassword}
        value={password}
      />
      <Button size='xl' onClick={onLoginClick} disabled={isLoading}>
        <Text >
          Login
        </Text>
      </Button>
    </div>
  );
});

export default LoginForm;
