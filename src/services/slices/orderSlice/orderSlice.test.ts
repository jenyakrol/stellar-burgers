import { orderSlice, placeOrderAction, setOrderModalData } from './orderSlice';
import { TPlacedOrder } from '@utils-types';

describe('Тест составления заказа', () => {
  const orderSliceReducer = orderSlice.reducer;

  const initialState = {
    orderRequest: false,
    orderModalData: null
  };

  const expectedOrder: TPlacedOrder = {
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
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png'
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
        image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png'
      }
    ],
    _id: '686e5a855a54df001b6dd5db',
    owner: {
      name: 'Евгения2',
      email: '123@gmail.comp',
      createdAt: '2025-06-15T12:15:05.105Z',
      updatedAt: '2025-07-06T16:20:08.434Z'
    },
    status: 'done',
    name: 'Флюоресцентный люминесцентный бургер',
    createdAt: '2025-07-09T12:03:17.187Z',
    updatedAt: '2025-07-09T12:03:17.930Z',
    number: 83974,
    price: 1976
  };

  test('Составление заказа', async () => {
    const pendingState = orderSliceReducer(
      initialState,
      placeOrderAction.pending('', [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e'
      ])
    );

    const fulfilledState = orderSliceReducer(
      pendingState,
      placeOrderAction.fulfilled(expectedOrder, '', [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e'
      ])
    );

    const rejectedState = orderSliceReducer(
      pendingState,
      placeOrderAction.rejected(new Error('ошибка'), '', [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e'
      ])
    );

    expect(pendingState.orderRequest).toBe(true);

    expect(fulfilledState.orderRequest).toBe(false);
    expect(fulfilledState.orderModalData).toEqual(expectedOrder);

    expect(rejectedState.orderRequest).toBe(false);
  });

  test('Установка значения модального окна заказа', () => {
    const actualState = orderSliceReducer(
      initialState,
      setOrderModalData(expectedOrder)
    );

    expect(actualState.orderModalData).toEqual(expectedOrder);

    const emptyState = orderSliceReducer(actualState, setOrderModalData(null));

    expect(emptyState.orderModalData).toBe(null);
  });
});
