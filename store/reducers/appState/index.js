import initialState from './initialState';
import { cloneObject } from '../../../utils';

export default function reducer(state = initialState, action = {}) {
  let newState;

  switch (action.type) {
    case 'SET_SYSTEM_MESSAGE':
      newState = cloneObject(state);
      newState.systemMessage = action.payload.message;
      return newState;

    case 'RESET_SYSTEM_MESSAGE':
      newState = cloneObject(state);
      newState.systemMessage = initialState.systemMessage;
      return newState;

    case 'ADD_PENDING_TRANSACTION':
      newState = cloneObject(state);
      newState.pendingTransactions.push(action.payload.event);
      return newState;

    case 'REMOVE_PENDING_TRANSACTION':
      newState = cloneObject(state);
      newState.pendingTransactions = newState.pendingTransactions.filter((event) => {
        return event.id !== action.payload.id;
      });
      return newState;

    default:
      return state;
  }
}
