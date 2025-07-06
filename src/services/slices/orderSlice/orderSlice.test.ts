import { configureStore } from '@reduxjs/toolkit';
import { orderSlice, placeOrderAction, setOrderModalData } from './orderSlice';
import { serverFailure, serverSuccess } from '../../../mock/node';

describe('Тест составления заказа', () => {
  beforeAll(() => {
    serverSuccess.listen();
  });

  afterAll(() => {
    serverSuccess.close();
  });

  test('Составление заказа', async () => {
    const expectedOrder = {
      ingredients: [
        {
          _id: '643d69a5c3f7b9001cfa093d',
          name: 'Флюоресцентная булка R2-D3',
          type: 'bun',
          proteins: 44,
          fat: 26,
          carbohydrates: 85,
          calories: 643,
          price: 988,
          image: 'https://code.s3.yandex.net/react/code/bun-01.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
          __v: 0
        },
        {
          _id: '643d69a5c3f7b9001cfa093e',
          name: 'Филе Люминесцентного тетраодонтимформа',
          type: 'main',
          proteins: 44,
          fat: 26,
          carbohydrates: 85,
          calories: 643,
          price: 988,
          image: 'https://code.s3.yandex.net/react/code/meat-03.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/meat-03-large.png',
          __v: 0
        }
      ],
      _id: '686a969c5a54df001b6dc278',
      owner: {
        name: 'Евгения2',
        email: '123@gmail.comp',
        createdAt: '2025-06-15T12:15:05.105Z',
        updatedAt: '2025-06-15T12:25:24.847Z'
      },
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2025-07-06T15:30:36.262Z',
      updatedAt: '2025-07-06T15:30:37.131Z',
      number: 83711,
      price: 1976
    };

    global.document = { ...global.document, cookie: 'accessToken=123' };

    const store = configureStore({
      reducer: orderSlice.reducer
    });

    expect(store.getState().orderRequest).toBe(false);

    const placeOrderPromise = store.dispatch(
      placeOrderAction(['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093e'])
    );

    expect(store.getState().orderRequest).toBe(true);

    await placeOrderPromise;

    const { orderRequest, orderModalData } = store.getState();

    expect(orderRequest).toBe(false);
    expect(orderModalData).toEqual(expectedOrder);

    store.dispatch(setOrderModalData(null));

    expect(store.getState().orderModalData).toBe(null);
  });
});

describe('Ошибка составления заказа', () => {
  beforeAll(() => {
    serverFailure.listen();
  });

  afterAll(() => {
    serverFailure.close();
  });

  test('Ошибка заказа', async () => {
    global.document = { ...global.document, cookie: 'accessToken=123' };

    const store = configureStore({
      reducer: orderSlice.reducer
    });

    expect(store.getState().orderRequest).toBe(false);

    const placeOrderPromise = store.dispatch(
      placeOrderAction(['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093e'])
    );

    expect(store.getState().orderRequest).toBe(true);

    await placeOrderPromise;

    expect(store.getState().orderRequest).toBe(false);
  });
});
