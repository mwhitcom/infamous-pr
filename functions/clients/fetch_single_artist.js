const admin = require('firebase-admin')
const functions = require('firebase-functions')

module.exports = function (request, response) {
    const artist = JSON.parse(Object.keys(request.body)[0]).artist;

    if (request.method === `OPTIONS`) {
        response.set('Access-Control-Allow-Origin', '*')
           .set('Access-Control-Allow-Methods', 'GET, POST')
           .status(200);
           return;
    }

    if (!artist) {
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(402).send({error: 'Please provide artist name'});
        return;
    }

    admin.firestore()
        .collection('artists')
        .doc(artist)
        .get()
        .then(item => {    
            const artist_data = item.data();
            response.set('Access-Control-Allow-Origin', "*")
            response.set('Access-Control-Allow-Methods', 'GET, POST')
            response.status(200).send({data: artist_data})
        })
        .catch(err => {
            response.status(500).send({message: `Error fetching ${artist}`, error: err})
        })

}