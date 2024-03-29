import initialState from './initialState';
import { cloneObject } from '../../../utils';

export default function reducer(state = initialState, action = {}) {
  let newState;

  switch (action.type) {
    case 'SET_SHOOTS':
      newState = cloneObject(state);
      newState = action.payload.data;
      return newState;

    default:
      return state;
  }
}
