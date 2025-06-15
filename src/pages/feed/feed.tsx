import { getFeed, getFeedOrders } from '@slices/ordersHistorySlice';
import { useDispatch, useSelector } from '@store';
import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';

export const Feed: FC = () => {
  const dispatch = useDispatch();

  const handleGetFeeds = () => {
    dispatch(getFeedOrders());
  };

  useEffect(handleGetFeeds, []);
  /** TODO: взять переменную из стора */
  const orders: TOrder[] = useSelector(getFeed).orders;

  if (!orders.length) {
    return <Preloader />;
  }

  return <FeedUI orders={orders} handleGetFeeds={handleGetFeeds} />;
};
