import getRef from '../getRef';

export default ({ url, document }) => {
  return new Promise(async (resolve, reject) => {
    const ref = await getRef(url);

    ref
      .set(document)
      .then((response) => {
        const { id } = response;

        resolve(id);
      })
      .catch((error) => {
        reject(new Error(error));
      });
  });
};
