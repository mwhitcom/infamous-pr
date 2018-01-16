const admin = require('firebase-admin')
const functions = require('firebase-functions')

module.exports = function (request, response) {
    if (!request.body.artist) {
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(402).send({
            error: 'Please provide artist name'
        })
    }

    let artist = request.artist.toUpperCase()

    admin.firestore()
        .collection('artists')
        .doc(artist)
        .get()
        .then(item => {
            let artist_data = item.data()         
            response.set('Access-Control-Allow-Origin', "*")
            response.set('Access-Control-Allow-Methods', 'GET, POST')
            response.status(200).send(artist_data)
        })
        .catch(err => {
            response.set('Access-Control-Allow-Origin', "*")
            response.set('Access-Control-Allow-Methods', 'GET, POST')
            response.status(500).send({message: `Error fetching ${artist}`, error: err})
        })
}