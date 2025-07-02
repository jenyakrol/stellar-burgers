import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { LoginUI } from '@ui-pages';
import { useDispatch, useSelector } from '@store';
import { getAuth, setUser } from '@slices/userSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUserApi } from '@api';
import { setCookie } from '@utils-cookie';
export const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  const auth = useSelector(getAuth);

  useEffect(() => {
    if (auth) {
      navigate(state?.from || '/');
    }
  }, [auth]);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const User = await loginUserApi({ email, password });
      setErrorText('');
      dispatch(setUser(User.user));
      setCookie('accessToken', User.accessToken);
      localStorage.setItem('refreshToken', User.refreshToken);
    } catch (error) {
      setErrorText((error as { message: string }).message);
    }
  };

  return (
    <LoginUI
      errorText={errorText}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};
