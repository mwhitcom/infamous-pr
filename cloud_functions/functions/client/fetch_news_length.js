const admin = require('firebase-admin')
const functions = require('firebase-functions')

module.exports = function(request, response){
    admin.firestore()
    .collection('news_stories')
    .get()
    .then(snapshot => {
        let length = snapshot.size
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(200).send(length)
    })
    .catch( err => { 
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(500).send({message: 'Error fetching news article count form DB', error: err})
    })
}