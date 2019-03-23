import { call, put } from 'redux-saga/effects';

import { auth } from '../../../../services';
import { prepareNextAction } from '../../../../utils';

const { signInAnonymously } = auth;

export default function* signInAnonymouslySaga(action) {
  try {
    const response = yield call(signInAnonymously);
    const nextAction = prepareNextAction(action, response);

    if (nextAction) {
      yield put(nextAction);
    } else if (response) {
      yield put({
        type: 'SIGN_IN_USER',
        payload: response,
      });
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
