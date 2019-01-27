import { call, put } from 'redux-saga/effects';

import { firestore } from '../../../../services';
import { prepareNextAction } from '../../../../utils';

const { getCollection } = firestore;

export default function* saga(action) {
  try {
    const { meta } = action;
    const { url, query } = meta;
    const response = yield call(getCollection, { url, query });
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
