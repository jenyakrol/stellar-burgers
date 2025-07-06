import { FC, useMemo } from 'react';
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import { getAuth } from '@slices/userSlice/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from '@store';
import {
  clearConstructor,
  getConstructorItems
} from '@slices/constructorSlice/constructorSlice';
import {
  getOrderModalData,
  getOrderRequest,
  placeOrderAction,
  setOrderModalData
} from '@slices/orderSlice/orderSlice';

export const BurgerConstructor: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /** TODO: взять переменные constructorItems, orderRequest и orderModalData из стора */
  const constructorItems = useSelector(getConstructorItems);

  const isAuth = useSelector(getAuth);

  const orderRequest = useSelector(getOrderRequest);

  const orderModalData = useSelector(getOrderModalData);

  const onOrderClick = () => {
    if (!isAuth) navigate('/login');
    else if (constructorItems.bun) {
      const currentOrderIngredients: string[] = [
        constructorItems.bun!._id,
        ...constructorItems.ingredients.map((item) => item._id)
      ];
      dispatch(placeOrderAction(currentOrderIngredients));
    }
  };
  const closeOrderModal = () => {
    dispatch(setOrderModalData(null));
    dispatch(clearConstructor());
  };

  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (s: number, v: TConstructorIngredient) => s + v.price,
        0
      ),
    [constructorItems]
  );

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};
