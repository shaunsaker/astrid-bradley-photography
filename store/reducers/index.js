import { combineReducers } from 'redux';

import shoots from './shoots';
import user from './user';

const reducers = combineReducers({
  shoots,
  user,
});

export default reducers;
