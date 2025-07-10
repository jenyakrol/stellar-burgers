import { rootReducer } from '@store';

describe('Проверка rootReducer', () => {
  const expectedState = {
    'burger-constructor': {
      constructorItems: {
        bun: null,
        ingredients: []
      }
    },
    ingredients: {
      ingredients: {
        buns: [],
        mains: [],
        sauces: []
      },
      loading: false
    },
    'orders-history': {
      userOrders: [],
      feed: {
        orders: [],
        total: 0,
        totalToday: 0
      },
      currentOpenedOrder: null
    },
    order: { orderRequest: false, orderModalData: null },
    user: {
      user: {
        name: '',
        email: ''
      },
      isAuth: true
    }
  };

  test('Начальное состояние', () => {
    const initialState = rootReducer(undefined, { type: '' });

    expect(initialState).toEqual(expectedState);
  });
});
