import batchUpdate from './batchUpdate';
import getCollection from './getCollection';
import getRef from './getRef';
import setDocument from './setDocument';
import sync from './sync';

const firestore = {
  batchUpdate,
  getCollection,
  getRef,
  setDocument,
  sync,
};

export { batchUpdate, getCollection, getRef, setDocument, sync };

export default firestore;
