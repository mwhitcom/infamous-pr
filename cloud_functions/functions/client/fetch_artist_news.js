const admin = require('firebase-admin')
const functions = require('firebase-functions')

module.exports =  function(request, response){
    if(!request.body.artist){
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(402).send({error: 'Please provide artist name'})
    }

    let artist = request.artist
    admin.firestore()
    .collection('news_stories')
    .get()
    .then(snapshot => {
        let single_artist = []
        snapshot.forEach(item=> {
            let data = item.data()
            data.tags == artist.toUpperCase()? single_artist.push(data): null
        })

        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(200).send(single_artist) 
    })
    .catch(err => {
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(500).send({message:`Error fetching arcticles for ${artist}`, error:err})
    })
}
