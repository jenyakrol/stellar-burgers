import {
  addConstructorItem,
  clearConstructor,
  constructorSlice,
  removeConstructorItem,
  swapBurgerIngredients
} from './constructorSlice';

describe('Слайс конструктора', () => {
  const bun = {
    _id: '643d69a5c3f7b9001cfa093c',
    name: 'Краторная булка N-200i',
    type: 'bun',
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png'
  };

  const filling = {
    _id: '643d69a5c3f7b9001cfa0941',
    name: 'Биокотлета из марсианской Магнолии',
    type: 'main',
    proteins: 420,
    fat: 142,
    carbohydrates: 242,
    calories: 4242,
    price: 424,
    image: 'https://code.s3.yandex.net/react/code/meat-01.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png'
  };

  const anotherFilling = {
    _id: '643d69a5c3f7b9001cfa093e',
    name: 'Филе Люминесцентного тетраодонтимформа',
    type: 'main',
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: 'https://code.s3.yandex.net/react/code/meat-03.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png'
  };

  test('Добавление ингредиента в конструктор', () => {
    const initialState = {
      constructorItems: {
        bun: null,
        ingredients: []
      }
    };

    const firstState = constructorSlice.reducer(
      initialState,
      addConstructorItem(bun)
    );

    expect(firstState.constructorItems.bun).toMatchObject(bun);
    expect(firstState.constructorItems.bun).toHaveProperty('id');

    const secondState = constructorSlice.reducer(
      firstState,
      addConstructorItem(filling)
    );

    expect(secondState.constructorItems.ingredients[0]).toMatchObject(filling);
    expect(secondState.constructorItems.ingredients[0]).toHaveProperty('id');
  });

  test('Удаление ингредиента из конструктора', () => {
    const firstIngredient = { ...filling, id: '1' };
    const secondIngredient = { ...anotherFilling, id: '2' };

    const initialState = {
      constructorItems: {
        bun: null,
        ingredients: [firstIngredient, secondIngredient]
      }
    };

    const expectedState = {
      constructorItems: {
        bun: null,
        ingredients: [secondIngredient]
      }
    };

    const newState = constructorSlice.reducer(
      initialState,
      removeConstructorItem({
        type: 'main',
        id: '1'
      })
    );

    expect(newState).toEqual(expectedState);
  });

  test('Смена местами ингредиентов в конструкторе', () => {
    const firstIngredient = { ...filling, id: '1' };
    const secondIngredient = { ...anotherFilling, id: '2' };

    const initialState = {
      constructorItems: {
        bun: null,
        ingredients: [firstIngredient, secondIngredient]
      }
    };

    const expectedState = {
      constructorItems: {
        bun: null,
        ingredients: [secondIngredient, firstIngredient]
      }
    };

    const newState = constructorSlice.reducer(
      initialState,
      swapBurgerIngredients([0, 1])
    );

    expect(newState).toEqual(expectedState);
  });

  test('Очистить конструктор', () => {
    const constructorBun = { ...bun, id: '3' };
    const firstIngredient = { ...filling, id: '1' };
    const secondIngredient = { ...anotherFilling, id: '2' };

    const initialState = {
      constructorItems: {
        bun: constructorBun,
        ingredients: [firstIngredient, secondIngredient]
      }
    };

    const expectedState = {
      constructorItems: {
        bun: null,
        ingredients: []
      }
    };

    const newState = constructorSlice.reducer(initialState, clearConstructor());

    expect(newState).toEqual(expectedState);
  });
});
