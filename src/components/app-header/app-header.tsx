import { FC } from 'react';
import { AppHeaderUI } from '@ui';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from '@store';
import { getAuth, getUser } from '@slices/userSlice/userSlice';

export const AppHeader: FC = () => {
  const { pathname } = useLocation();

  const userName = useSelector(getUser).name;

  return <AppHeaderUI pathname={pathname} userName={userName} />;
};
