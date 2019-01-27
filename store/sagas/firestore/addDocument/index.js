import { call, put } from 'redux-saga/effects';

import { firestore } from '../../../../services';
import { prepareNextAction } from '../../../../utils';

const { addDocument } = firestore;

export default function* saga(action) {
  try {
    const { payload, meta } = action;
    const { url } = meta;
    const { document } = payload;
    const response = yield call(addDocument, { url, document });
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
      },
    });
  }
}
