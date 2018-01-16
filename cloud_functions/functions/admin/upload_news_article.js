const admin = require('firebase-admin')
const functions = require('firebase-functions')

module.exports = function(request, response){
    if (!request.body.data) {
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(402).send({
            error: 'Please provide news data'
        })
    }
    let data = request.body.data 
    admin.firestore()
    .collection('news_stories')
    .add(data)
    .then(ref => {
        let id ={ id: ref.id }
        admin.firestore()
        .collection('news_stories')
        .doc(id.id)
        .update(id, {create: true})
        .then(()=>{
            response.set('Access-Control-Allow-Origin', "*")
            response.set('Access-Control-Allow-Methods', 'GET, POST')
            response.status(200).send({message: `News Aricle Uploaded !!!`})
        })
    })
    .catch( err => { 
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(500).send({message: 'Error uploading News Article', error: err})
    })
}