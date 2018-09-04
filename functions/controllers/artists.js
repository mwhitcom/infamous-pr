const admin = require('firebase-admin');

const collection = 'artists';

const get = function(req, res) {
  const artistName = req.params.name;

  if (artistName) {
    admin
      .firestore()
      .collection(collection)
      .where('name', '==', artistName)
      .get()
      .then(snapshot => {
        const [doc] = snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }));
        return res.status(200).json(doc);
      })
      .catch(error => console.error(error));
  }

  admin
    .firestore()
    .collection(collection)
    .get()
    .then(snapshot => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      }));
      return res.status(200).json(data);
    })
    .catch(error => console.error(error));
};

module.exports = {
  get,
};
