const admin = require('firebase-admin')
const functions = require('firebase-functions')

module.exports = function (request, response) {
    if (!request.body.artist) {
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(402).send({
            message: 'Please provide artist name',
            error: `request.body.artist is ${request.body.artist}`
        })
    }

    let artist = request.body.artist.toUpperCase()
    admin.firestore()
        .collection('artists')
        .doc(artist)
        .delete()
        .then(() => {
            response.set('Access-Control-Allow-Origin', "*")
            response.set('Access-Control-Allow-Methods', 'GET, POST')
            response.status(200).send({message: `Arist ${aritst} deleted from client DB !!!`})
        })
        .catch(err => {
            response.set('Access-Control-Allow-Origin', "*")
            response.set('Access-Control-Allow-Methods', 'GET, POST')
            response.status(500).send({message:'Error deleteing Artist from DB', error: err})
        })
}