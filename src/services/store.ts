import { combineSlices, configureStore } from '@reduxjs/toolkit';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { userSlice } from '@slices/userSlice/userSlice';
import { ingredientsSlice } from '@slices/ingredientsSlice/ingredientsSlice';
import { constructorSlice } from '@slices/constructorSlice/constructorSlice';
import { ordersHistorySlice } from '@slices/ordersHistorySlice/ordersHistorySlice';
import { orderSlice } from '@slices/orderSlice/orderSlice';

export const rootReducer = combineSlices(
  userSlice,
  ingredientsSlice,
  constructorSlice,
  ordersHistorySlice,
  orderSlice
);

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
