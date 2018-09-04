const admin = require('firebase-admin');

const collection = 'news_stories';

const get = function(req, res) {
  const artistName = req.params.name;

  if (artistName) {
    admin
      .firestore()
      .collection(collection)
      .where('client', '==', artistName)
      .get()
      .then(snapshot => {
        const docs = snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }));
        return res.status(200).json(docs);
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
