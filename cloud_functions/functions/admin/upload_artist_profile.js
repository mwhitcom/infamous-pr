const admin = require('firebase-admin')
const functions = require('firebase-functions')

module.exports = function(request, response){
    if (!request.body.artist) {
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(402).send({
            error: 'Please provide artist'
        })
    }
    let artist_data = request.body.artist
    let artist_name = artist_data.name.toUpperCase()
    admin.firestore()
    .collection('artists')
    .doc(artist_name)
    .update(artist_data, { create: true })
    .then(()=>{
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(200).send({message: `${artist_name} profile uploaded !!!`})
    })
    .catch( err => { 
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(500).send({message:`Error uploading ${artist_name} profile`, error: err})
    })
}