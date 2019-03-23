import initialState from './initialState';
import { cloneObject } from '../../../utils';

export default function reducer(state = initialState, action = {}) {
  let newState;

  switch (action.type) {
    case 'SIGN_IN_USER':
      newState = cloneObject(state);
      newState = action.payload.user;
      newState.authenticated = true;
      return newState;

    case 'SIGN_OUT_USER':
      newState = cloneObject(state);
      newState = initialState;
      return newState;

    default:
      return state;
  }
}
