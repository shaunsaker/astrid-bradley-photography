import { takeLatest } from 'redux-saga/effects';

import { getCollection } from './firestore';

export default function* sagas() {
  yield takeLatest('getCollection', getCollection);
}
