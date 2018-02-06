const admin = require('firebase-admin')
const functions = require('firebase-functions')

module.exports = function (request, response) {
    if (!request.body.id) {
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(402).send({
            message: 'Please provide article id',
            error: `request.body.artist is ${request.body.id}`
        })
    }
    
    let id = request.body.id

    admin.firestore()
        .collection('news_stories')
        .doc(id)
        .delete()
        .then(() => {
            response.set('Access-Control-Allow-Origin', "*")
            response.set('Access-Control-Allow-Methods', 'GET, POST')
            response.status(200).send({message: `Article ${id} deleted from DB !!!`})
        })
        .catch(err => {
            response.set('Access-Control-Allow-Origin', "*")
            response.set('Access-Control-Allow-Methods', 'GET, POST')
            response.status(500).send({message:'Error deleteing News Article from DB', error: err})
        })
}