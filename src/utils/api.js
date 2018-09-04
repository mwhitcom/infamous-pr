import fire from './fire'
// import axios from 'axios';

const get = (endpoint, params) => {
  return axios.get(endpoint, data, {
    ...(params && { params }),
  });
}

export function post(endpoint, data, params) {
  return axios.post(endpoint, data, {
    ...(params && { params }),
  });
}

export function patch(endpoint, data, params) {
  return axios.patch(endpoint, data, {
    ...(params && { params }),
  });
}

export function deleteApi(endpoint, params) {
  return axios.delete(endpoint, {
    ...(params && { params }),
  });
}

/**
 *
 * @param {string} collection - firestore collection to get all documents for
 * @returns {array} - firestore documents
 */
const getAll = collection =>
  fire.firestore()
    .collection(collection)
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      }))

      return data
    })

/**
 *
 * @param {string} collection - firestore collection
 * @param {string} property - property to match to value
 * @param {string} value - property value
 * @returns {array} - array of firestore documents
 */
const getAllWhere = (collection, property, value) =>
  fire.firestore()
    .collection(collection)
    .where(property, '==', value)
    .get()
    .then((snapshot) => {
      const docs = snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      }))

      return docs
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
 * @param {string} property - property to match to value
 * @param {string} value - property value
 * @returns {object} - firestore document
 */
const getOneWhere = (collection, property, value) =>
  fire.firestore()
    .collection(collection)
    .where(property, '==', value)
    .get()
    .then((snapshot) => {
      const [doc] = snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      }))

      return doc
    })
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
    .then(doc => ({
      id: doc.id,
      data
    }))

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
    .then(doc => ({
      id,
      data
    }))

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
  get,
  getAll,
  getAllWhere,
  getOne,
  getOneWhere,
  createOne,
  updateOne,
  deleteOne
}
