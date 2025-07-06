import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { RegisterUI } from '@ui-pages';
import { useDispatch, useSelector } from '@store';
import { getAuth, setUser } from '@slices/userSlice/userSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { registerUserApi } from '@api';
import { setCookie } from '@utils-cookie';

export const Register: FC = () => {
  const [userName, setUserName] = useState('');
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
      const User = await registerUserApi({ name: userName, email, password });
      setErrorText('');
      dispatch(setUser(User.user));
      setCookie('accessToken', User.accessToken);
      localStorage.setItem('refreshToken', User.refreshToken);
    } catch (error) {
      setErrorText((error as { message: string }).message);
    }
  };

  return (
    <RegisterUI
      errorText={errorText}
      email={email}
      userName={userName}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      setUserName={setUserName}
      handleSubmit={handleSubmit}
    />
  );
};
