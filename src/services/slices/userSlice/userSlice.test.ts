import { serverFailure, serverSuccess } from '../../../mock/node';
import { configureStore } from '@reduxjs/toolkit';
import { getUserAction, logoutAction, userSlice } from './userSlice';

describe('Слайс аутентификации', () => {
  beforeAll(() => {
    serverSuccess.listen();
  });

  afterAll(() => {
    serverSuccess.close();
  });

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

    global.document = { ...global.document, cookie: 'accessToken=123' };

    const store = configureStore({
      reducer: userSlice.reducer
    });

    expect(store.getState()).toEqual(initialState);

    const getUserPromise = store.dispatch(getUserAction());

    await getUserPromise;

    expect(store.getState()).toEqual(expectedState);
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

    const getItem = jest.fn(() => '123');
    const removeItem = jest.fn();

    global.localStorage = {
      ...global.localStorage,
      getItem,
      removeItem
    };

    global.document = { ...global.document, cookie: 'accessToken=123' };

    const store = configureStore({
      reducer: userSlice.reducer
    });

    await store.dispatch(getUserAction());

    expect(store.getState()).toEqual(initialState);

    const logoutPromise = store.dispatch(logoutAction());

    expect(getItem).toHaveBeenCalled();

    await logoutPromise;

    expect(store.getState()).toEqual(expectedState);
    expect(removeItem).toHaveBeenCalled();
  });
});

describe('Ошибки аутентификации', () => {
  beforeAll(() => {
    serverFailure.listen();
  });

  afterAll(() => {
    serverFailure.close();
  });

  test('Ошибка аутентификации', async () => {
    const initialState = {
      user: {
        name: '',
        email: ''
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

    global.document = { ...global.document, cookie: 'accessToken=123' };

    const store = configureStore({
      reducer: userSlice.reducer
    });

    expect(store.getState()).toEqual(initialState);

    const getUserPromise = store.dispatch(getUserAction());

    await getUserPromise;

    expect(store.getState()).toEqual(expectedState);
  });
});
