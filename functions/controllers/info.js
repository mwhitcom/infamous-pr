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

const patch = function(req, res) {
  const { body } = req;
  admin
    .firestore()
    .collection(collection)
    .doc(doc)
    .update(body)
    .then(() => {
      return get(req, res);
    })
    .catch(error => console.error(error));
};

module.exports = {
  get,
  patch,
};
