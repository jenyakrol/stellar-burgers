import {
  ConstructorPage,
  Feed,
  ForgotPassword,
  Login,
  NotFound404,
  Profile,
  ProfileOrders,
  Register,
  ResetPassword,
  Info
} from '@pages';
import '../../index.css';
import styles from './app.module.css';

import { AppHeader, IngredientDetails, Modal, OrderInfo } from '@components';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from '@store';
import { useEffect } from 'react';
import { getIngredients } from '@slices/ingredientsSlice';
import { getUserAction } from '@slices/userSlice';
import {
  getCurrentOpenedOrder,
  setCurrenOpenedOrder
} from '@slices/ordersHistorySlice';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const backgroundLocation = location.state?.background;
  const currenOpenedOrderTitle = useSelector(getCurrentOpenedOrder)?.number;

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getUserAction());
  }, []);

  const closeOrderModal = (path: string) => {
    navigate(path);
    dispatch(setCurrenOpenedOrder(null));
  };

  return (
    <div className={styles.app}>
      <Routes location={backgroundLocation || location}>
        <Route path='/' element={<AppHeader />}>
          <Route index element={<ConstructorPage />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/orders' element={<ProfileOrders />} />
          <Route
            path='/feed/:order'
            element={
              <Info title={`#${currenOpenedOrderTitle}`}>
                <OrderInfo />
              </Info>
            }
          />
          <Route
            path='/profile/orders/:order'
            element={
              <Info title={`#${currenOpenedOrderTitle}`}>
                <OrderInfo />
              </Info>
            }
          />
          <Route
            path='/ingredients/:id'
            element={
              <Info title='Детали ингридиента'>
                <IngredientDetails />
              </Info>
            }
          />
        </Route>
        <Route path='*' element={<NotFound404 />} />
      </Routes>
      {backgroundLocation && (
        <Routes>
          <Route
            path='/feed/:order'
            element={
              <Modal
                title={`#${currenOpenedOrderTitle}`}
                onClose={() => closeOrderModal('/feed')}
              >
                <OrderInfo />
              </Modal>
            }
          />
          <Route
            path='/profile/orders/:order'
            element={
              <Modal
                title={`#${currenOpenedOrderTitle}`}
                onClose={() => closeOrderModal('/profile/orders')}
              >
                <OrderInfo />
              </Modal>
            }
          />
          <Route
            path='/ingredients/:id'
            element={
              <Modal title={`Детали ингредиента`} onClose={() => navigate('/')}>
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
};

export default App;
