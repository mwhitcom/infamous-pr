import fire from './fire'

/**
 * 
 * @param {string} collection - firestore collection to get all documents for
 * @returns {array} - firestore documents
 */
const getAll = (collection) =>
  fire.firestore()
    .collection(collection)
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      }))

      return data
    })

/**
 * 
 * @param {string} collection - firestore collection
 * @param {string} id - firestore id
 * @returns {object} - doc data
 */
const getOne = (collection, id) =>
  fire.firestore()
    .collection(collection)
    .doc(id)
    .get()
    .then(snapshot => snapshot.data())

/**
 * 
 * @param {string} collection - firestore collection
 * @param {object} data - document object
 * @returns {object} - doc data
 * @example
  {
    id: 12345 // firestore id,
    data: { } document data object
  }
 */
const createOne = (collection, data) =>
  fire.firestore()
    .collection(collection)
    .add(data)
    .then((doc) => {
      return {
        id: doc.id,
        data
      }
    })

/**
 * 
 * @param {string} collection - firestore collection
 * @param {string} id - firestore doc id
 * @param {object} data - firestore document data to update
 * @returns {object} - doc data
 * @example
  {
    id: 12345 // firestore id
    data: { } document data object
  }
 */
const updateOne = (collection, id, data) =>
  fire.firestore()
    .collection(collection)
    .doc(id)
    .update(data)
    .then((doc) => {
      return {
        id,
        data
      }
    })

/**
 * @param {string} - firstore collection
 * @param {string} - firestore id
 * @returns {string} - firestore id that was deleted
 */
const deleteOne = (collection, id) =>
  fire.firestore()
    .collection(collection)
    .doc(id)
    .delete()
    .then(() => id)

export default {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne
}