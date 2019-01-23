import { createStore } from 'redux';

import reducers from './reducers';

const store = (initialState, options) => {
  return createStore(reducers, initialState);
};

export default store;
