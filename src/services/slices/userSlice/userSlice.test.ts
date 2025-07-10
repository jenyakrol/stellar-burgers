import { getUserAction, logoutAction, userSlice } from './userSlice';

describe('Слайс аутентификации', () => {
  const userSliceReducer = userSlice.reducer;

  test('Аутентификация', async () => {
    const initialState = {
      user: {
        name: '',
        email: ''
      },
      isAuth: true
    };

    const expectedState = {
      user: {
        name: 'Евгения2',
        email: '123@gmail.comp'
      },
      isAuth: true
    };

    const expectedRejectedState = {
      user: {
        name: '',
        email: ''
      },
      isAuth: false
    };

    const serverResponse = {
      success: true,
      user: {
        email: '123@gmail.comp',
        name: 'Евгения2'
      }
    };

    const fulfilledState = userSliceReducer(
      initialState,
      getUserAction.fulfilled(serverResponse, '')
    );

    const rejectedState = userSliceReducer(
      initialState,
      getUserAction.rejected(new Error('ошибка'), '')
    );

    expect(fulfilledState).toEqual(expectedState);

    expect(rejectedState).toEqual(expectedRejectedState);
  });

  test('Логаут', async () => {
    const initialState = {
      user: {
        name: 'Евгения2',
        email: '123@gmail.comp'
      },
      isAuth: true
    };

    const expectedState = {
      user: {
        name: '',
        email: ''
      },
      isAuth: false
    };

    const removeItem = jest.fn();

    global.localStorage = {
      ...global.localStorage,
      removeItem
    };

    global.document = { ...global.document, cookie: 'accessToken=123' };

    const fulfilledState = userSliceReducer(
      initialState,
      logoutAction.fulfilled(undefined, '')
    );

    expect(fulfilledState).toEqual(expectedState);
  });
});
