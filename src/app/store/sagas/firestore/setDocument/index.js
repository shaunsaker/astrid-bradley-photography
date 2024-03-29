import { call, put } from 'redux-saga/effects';

import { firestore } from '../../../../services';
import { createUID, prepareNextAction } from '../../../../utils';

const { setDocument } = firestore;

export default function* saga(action) {
  try {
    const { payload, meta } = action;
    const { url } = meta;
    const { document } = payload;

    // Add a write event
    const writeEventID = createUID();

    yield put({
      type: 'ADD_PENDING_TRANSACTION',
      payload: {
        event: {
          id: writeEventID,
          action,
        },
      },
    });

    const response = yield call(setDocument, { url, document });

    // We received a response, remove the write event
    yield put({
      type: 'REMOVE_PENDING_TRANSACTION',
      payload: {
        id: writeEventID,
      },
    });

    const nextAction = prepareNextAction(action, response);

    if (nextAction) {
      yield put(nextAction);
    }
  } catch (error) {
    const { message } = error;

    yield put({
      type: 'SET_SYSTEM_MESSAGE',
      payload: {
        message,
        isError: true,
      },
    });
  }
}
