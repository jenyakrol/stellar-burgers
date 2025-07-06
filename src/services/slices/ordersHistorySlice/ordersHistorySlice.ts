import {
  getFeedsApi,
  getOrderByNumberApi,
  getOrdersApi,
  TFeedsResponse
} from '@api';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFeed, TOrder } from '@utils-types';

type ordersHistoryState = {
  userOrders: TOrder[];
  feed: TFeed;
  currentOpenedOrder: TOrder | null;
};

const initialState: ordersHistoryState = {
  userOrders: [],
  feed: {
    orders: [],
    total: 0,
    totalToday: 0
  },
  currentOpenedOrder: null
};

export const getFeedOrders = createAsyncThunk('orders/get', async () =>
  getFeedsApi()
);

export const getUserOrders = createAsyncThunk('userOrders/get', async () =>
  getOrdersApi()
);

export const getOrderAction = createAsyncThunk(
  'order/get',
  async (number: number) => {
    const res = await getOrderByNumberApi(number);
    return res.orders[0];
  }
);

export const ordersHistorySlice = createSlice({
  name: 'orders-history',
  initialState,
  reducers: {
    setCurrenOpenedOrder: (
      state,
      { payload: payload }: PayloadAction<{ order: TOrder } | null>
    ) => {
      state.currentOpenedOrder = payload?.order ?? null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFeedOrders.pending, (state) => {
        state.feed = {
          orders: [],
          total: 0,
          totalToday: 0
        };
      })
      .addCase(
        getFeedOrders.fulfilled,
        (state, { payload }: PayloadAction<TFeedsResponse>) => {
          state.feed.orders = payload.orders;
          state.feed.total = payload.total;
          state.feed.totalToday = payload.totalToday;
        }
      )
      .addCase(
        getUserOrders.fulfilled,
        (state, { payload }: PayloadAction<TOrder[]>) => {
          state.userOrders = payload;
        }
      )
      .addCase(
        getOrderAction.fulfilled,
        (state, { payload }: PayloadAction<TOrder>) => {
          state.currentOpenedOrder = payload;
        }
      );
  },
  selectors: {
    getUserOrdersHistory: (state) => state.userOrders,
    getFeed: (state) => state.feed,
    getCurrentOpenedOrder: (state) => state.currentOpenedOrder
  }
});

export const { getUserOrdersHistory, getFeed, getCurrentOpenedOrder } =
  ordersHistorySlice.selectors;
export const { setCurrenOpenedOrder } = ordersHistorySlice.actions;
