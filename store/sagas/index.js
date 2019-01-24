import { takeEvery, fork, all } from 'redux-saga/effects';

import { getCollection } from './firestore';

export default function* sagas() {
  yield all([fork(takeEvery, 'getCollection', getCollection)]);
}
