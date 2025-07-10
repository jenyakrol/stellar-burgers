import { setupServer } from 'msw/node';
import { handlersFailures, handlersSuccess } from './handlers';

export const serverSuccess = setupServer(...handlersSuccess);
export const serverFailure = setupServer(...handlersFailures);
