const admin = require('firebase-admin')
const functions = require('firebase-functions')

module.exports=  function(request, response){
    // if(!request.body.artist){response.status(402).send({error: 'Please provide artist name'})}
    let artist = request.artist    
    admin.firestore().collection('news_stories')
    .where(tags.artist, '==', true)
    .get()
    .then(docs => {
        let data = []
        docs.forEach(doc => data.push(doc.data()))
        data.
        response.status(200).send(data)
    })
}

 
