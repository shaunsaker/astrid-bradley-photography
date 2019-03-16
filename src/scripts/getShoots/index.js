const admin = require('firebase-admin');

const serviceAccount = require('./secret-key.json');

const getShoots = async () => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://astrid-bradley-photograp-5925e.firebaseio.com',
  });

  const db = await admin.firestore();
  const ref = await db.collection('shoots');
  const shoots = [];

  await ref.get().then((snapshot) => {
    snapshot.forEach((document) => {
      const { id } = document;

      shoots.push({ id });
    });
  });

  return shoots;
};

module.exports = getShoots;
