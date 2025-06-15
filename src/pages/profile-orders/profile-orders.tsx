import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from '@store';
import { getAuth, getUserAction } from '@slices/userSlice';
import {
  getUserOrders,
  getUserOrdersHistory
} from '@slices/ordersHistorySlice';

export const ProfileOrders: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAction());
    dispatch(getUserOrders());
  }, []);

  const auth = useSelector(getAuth);

  if (!auth) return <Navigate to='/login' />;
  /** TODO: взять переменную из стора */
  const orders: TOrder[] = useSelector(getUserOrdersHistory);

  return <ProfileOrdersUI orders={orders} />;
};
