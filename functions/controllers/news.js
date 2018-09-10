const admin = require('firebase-admin');

const collection = 'news_stories';

const get = function(req, res) {
  const id = req.params.id;

  if (id) {
    admin
      .firestore()
      .collection(collection)
      .doc(id)
      .get()
      .then(snapshot => {
        const doc = snapshot.data();
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

const getByName = function(req, res) {
  const artistName = req.params.name;
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
};

const post = function(req, res) {
  const { body } = req;
  admin
    .firestore()
    .collection(collection)
    .add(body)
    .then(docRef => {
      docRef.get().then(snapshot => {
        const doc = { id: docRef.id, data: snapshot.data() };
        return res.status(200).json(doc);
      });
    })
    .catch(error => console.error(error));
};

const patch = function(req, res) {
  const { body } = req;
  const id = req.params.id;
  admin
    .firestore()
    .collection(collection)
    .doc(id)
    .update(body)
    .then(() => {
      return get(req, res);
    })
    .catch(error => console.error(error));
};

const deleteOne = function(req, res) {
  const id = req.params.id;
  admin
    .firestore()
    .collection(collection)
    .doc(id)
    .delete()
    .then(() => {
      return res.status(200).json({ id });
    })
    .catch(error => console.error(error));
};

module.exports = {
  get,
  getByName,
  post,
  patch,
  deleteOne,
};
