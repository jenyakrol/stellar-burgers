import { getIngredientsApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TIngredient } from '@utils-types';

type ConstructorState = {
  ingredients: {
    buns: TIngredient[];
    mains: TIngredient[];
    sauces: TIngredient[];
  };
  loading: boolean;
};

const initialState: ConstructorState = {
  ingredients: {
    buns: [],
    mains: [],
    sauces: []
  },
  loading: false
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
      })
      .addCase(getIngredients.rejected, (state) => {
        state.loading = false;
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
