import { orderBurgerApi } from '@api';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TPlacedOrder } from '@utils-types';

type OrderState = {
  orderRequest: boolean;
  orderModalData: TPlacedOrder | null;
};

const initialState: OrderState = {
  orderRequest: false,
  orderModalData: null
};

export const placeOrderAction = createAsyncThunk(
  'order/post',
  async (ingredients: string[]) => (await orderBurgerApi(ingredients)).order
);

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrderModalData: (
      state,
      { payload }: PayloadAction<TPlacedOrder | null>
    ) => {
      state.orderModalData = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeOrderAction.pending, (state) => {
        state.orderRequest = true;
      })
      .addCase(
        placeOrderAction.fulfilled,
        (state, { payload }: PayloadAction<TPlacedOrder>) => {
          state.orderRequest = false;
          state.orderModalData = payload;
        }
      )
      .addCase(placeOrderAction.rejected, (state) => {
        state.orderRequest = false;
      });
  },
  selectors: {
    getOrderRequest: (state) => state.orderRequest,
    getOrderModalData: (state) => state.orderModalData
  }
});

export const { getOrderRequest, getOrderModalData } = orderSlice.selectors;
export const { setOrderModalData } = orderSlice.actions;
