import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();
const middleware = [];

middleware.push(sagaMiddleware);
middleware.push(loggerMiddleware);

function configureStore(initialState) {
  /**
   * Since Next.js does server-side rendering, you are REQUIRED to pass`initialState`
   * when creating the store.
   */

  const store = createStore(reducers, initialState, applyMiddleware(...middleware));

  /**
   * next-redux-saga depends on `runSagaTask` and `sagaTask` being attached to the store.
   *
   *   `runSagaTask` is used to rerun the sagas on the client when in sync mode (default)
   *   `sagaTask` is used to await the sagas task before sending results to the client
   *
   */

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(sagas);
  };

  // run the sagas initially
  store.runSagaTask();

  return store;
}

export default configureStore;
