const admin = require('firebase-admin');

const collection = 'infamous';
const doc = 'page_info';

const get = function(req, res) {
  admin
    .firestore()
    .collection(collection)
    .doc(doc)
    .get()
    .then(snapshot => {
      const data = snapshot.data();
      return res.status(200).json(data);
    })
    .catch(error => console.error(error));
};

module.exports = {
  get,
};
