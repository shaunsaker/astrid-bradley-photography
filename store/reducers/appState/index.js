import initialState from './initialState';
import { cloneObject } from '../../../utils';

export default function reducer(state = initialState, action = {}) {
  let newState;

  switch (action.type) {
    case 'SET_SYSTEM_MESSAGE':
      newState = cloneObject(state);
      newState.systemMessage = action.payload.message;
      return newState;

    default:
      return state;
  }
}
