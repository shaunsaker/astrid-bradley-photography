/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');

const serviceAccount = require('./secret-key.json');

const collections = ['shoots', 'packages'];

const getData = async () => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://astrid-bradley-photograp-5925e.firebaseio.com',
  });

  const db = await admin.firestore();

  for (const collection of collections) {
    console.log('Getting content for', collection);
    const ref = await db.collection(collection);
    const data = [];

    await ref
      .get()
      .then((snapshot) => {
        snapshot.forEach((document) => {
          const { id } = document;

          data.push({ id, ...document.data() });
        });
      })
      .catch((error) => {
        console.log(error);

        // Don't let an error here obstruct the script
        return collection;
      });

    fs.writeFileSync(
      path.join(__dirname, '../../', 'data', `${collection}.json`),
      JSON.stringify(data),
    );

    console.log('Content gotten and written for', collection);
  }
};

getData();
