import { takeLatest } from 'redux-saga/effects';

import { signInWithEmail, signOut } from './auth';
import { addDocument, getCollection } from './firestore';

export default function* sagas() {
  yield takeLatest('signInWithEmail', signInWithEmail);
  yield takeLatest('signOut', signOut);
  yield takeLatest('addDocument', addDocument);
  yield takeLatest('getCollection', getCollection);
}
