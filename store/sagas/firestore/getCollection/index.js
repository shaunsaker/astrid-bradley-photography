import { call, put } from 'redux-saga/effects';

import { firestore } from '../../../../services';
import { prepareNextAction } from '../../../../utils';

const { getCollection } = firestore;

function* saga(action) {
  try {
    const { meta } = action;
    const { url, query } = meta;
    const response = yield call(getCollection, url, query);
    const nextAction = prepareNextAction(action, response);

    yield put(nextAction);
  } catch (error) {
    console.log(error); // TODO: Handle errors
  }
}

export default saga;
