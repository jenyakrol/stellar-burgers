import { FC } from 'react';
import { AppHeaderUI } from '@ui';
import { useNavigate } from 'react-router-dom';
import { useSelector } from '@store';
import { getAuth, getUser } from '@slices/userSlice';

export const AppHeader: FC = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(getAuth);

  const onProfileClick = () => {
    if (isAuth) navigate('/profile');
    else navigate('/login');
  };

  const onFeedClick = () => navigate('/feed');
  const onConstructorClick = () => navigate('/');
  const userName = useSelector(getUser).name;

  return (
    <AppHeaderUI
      userName={userName}
      onProfileClick={onProfileClick}
      onFeedClick={onFeedClick}
      onConstructorClick={onConstructorClick}
    />
  );
};
