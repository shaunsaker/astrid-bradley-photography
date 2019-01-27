import { combineReducers } from 'redux';

import appState from './appState';
import shoots from './shoots';
import user from './user';

const reducers = combineReducers({
  appState,
  shoots,
  user,
});

export default reducers;
