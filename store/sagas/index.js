import { takeLatest } from 'redux-saga/effects';

import { signInWithEmail, signOut } from './auth';
import { addDocument, sync } from './firestore';

export default function* sagas() {
  yield takeLatest('signInWithEmail', signInWithEmail);
  yield takeLatest('signOut', signOut);
  yield takeLatest('addDocument', addDocument);
  yield takeLatest('sync', sync);
}
