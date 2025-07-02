import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ConstructorItems,
  TConstructorIngredient,
  TIngredient
} from '@utils-types';

type ConstructorState = {
  constructorItems: ConstructorItems;
};

const initialState: ConstructorState = {
  constructorItems: {
    bun: null,
    ingredients: []
  }
};

export const constructorSlice = createSlice({
  name: 'burger-constructor',
  initialState,
  reducers: {
    addConstructorItem: {
      reducer: (state, { payload }: PayloadAction<TConstructorIngredient>) => {
        if (payload.type === 'bun') state.constructorItems.bun = payload;
        else state.constructorItems.ingredients?.push(payload);
      },
      prepare: (ingredient: TIngredient) => ({
        payload: { ...ingredient, id: crypto.randomUUID() }
      })
    },
    removeConstructorItem: (
      state,
      { payload }: PayloadAction<TConstructorIngredient>
    ) => {
      if (payload.type === 'bun') state.constructorItems.bun = null;
      else
        state.constructorItems.ingredients =
          state.constructorItems.ingredients.filter(
            (item) => item.id !== payload.id
          );
    },
    swapBurgerIngredients: (
      state,
      { payload }: PayloadAction<[number, number]>
    ) => {
      [
        state.constructorItems.ingredients[payload[0]],
        state.constructorItems.ingredients[payload[1]]
      ] = [
        state.constructorItems.ingredients[payload[1]],
        state.constructorItems.ingredients[payload[0]]
      ];
    },
    clearConstructor: (state) => {
      state.constructorItems = {
        bun: null,
        ingredients: []
      };
    }
  },
  selectors: {
    getConstructorItems: (state) => state.constructorItems
  }
});

export const { getConstructorItems } = constructorSlice.selectors;

export const {
  addConstructorItem,
  removeConstructorItem,
  swapBurgerIngredients
} = constructorSlice.actions;
