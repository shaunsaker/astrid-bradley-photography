import { combineReducers } from 'redux';

import appState from './appState';
import packages from './packages';
import products from './products';
import shoots from './shoots';
import user from './user';

const reducers = combineReducers({
  appState,
  packages,
  products,
  shoots,
  user,
});

export default reducers;
