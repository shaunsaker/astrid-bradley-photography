import { takeLatest } from 'redux-saga/effects';

import { signInWithEmail, signOut } from './auth';
import { batchUpdate, setDocument, sync } from './firestore';

export default function* sagas() {
  yield takeLatest('signInWithEmail', signInWithEmail);
  yield takeLatest('signOut', signOut);
  yield takeLatest('batchUpdate', batchUpdate);
  yield takeLatest('setDocument', setDocument);
  yield takeLatest('sync', sync);
}
