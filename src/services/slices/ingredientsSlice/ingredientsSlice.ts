import { getIngredientsApi } from '@api';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TIngredient } from '@utils-types';
import { AnyARecord } from 'dns';

type ConstructorState = {
  ingredients: {
    buns: TIngredient[];
    mains: TIngredient[];
    sauces: TIngredient[];
  };
  loading: boolean;
  error: any;
};

const initialState: ConstructorState = {
  ingredients: {
    buns: [],
    mains: [],
    sauces: []
  },
  loading: false,
  error: undefined
};

export const getIngredients = createAsyncThunk('ingredients/getAll', async () =>
  getIngredientsApi()
);

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIngredients.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getIngredients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        const buns =
          action.payload.filter((item) => item.type === 'bun') ?? null;
        const mains =
          action.payload.filter((item) => item.type === 'main') ?? null;
        const sauces =
          action.payload.filter((item) => item.type === 'sauce') ?? null;

        state.ingredients = { buns, mains, sauces };
        state.loading = false;
        state.error = undefined;
      });
  },
  selectors: {
    getIngredientsStore: (state) => state.ingredients,
    getUnsortedIngredients: (state) => [
      ...state.ingredients.buns,
      ...state.ingredients.mains,
      ...state.ingredients.sauces
    ]
  }
});

export const { getIngredientsStore, getUnsortedIngredients } =
  ingredientsSlice.selectors;
