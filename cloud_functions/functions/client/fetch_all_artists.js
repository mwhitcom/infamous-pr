const admin = require('firebase-admin')
const functions = require('firebase-functions')

module.exports = function (request, response) {
    admin.firestore()
        .collection('artists')
        .get()
        .then(snapshot => {
            let artist_data = []
            snapshot.forEach(item => {
                let data = item.data()
                artist_data.push(data)
            })
            response.set('Access-Control-Allow-Origin', "*")
            response.set('Access-Control-Allow-Methods', 'GET, POST')
            response.status(200).send(artist_data)
        })
        .catch(err => {
            response.set('Access-Control-Allow-Origin', "*")
            response.set('Access-Control-Allow-Methods', 'GET, POST')
            response.status(500).send({message: 'Error fetching Artists data', error:err})
        })
}