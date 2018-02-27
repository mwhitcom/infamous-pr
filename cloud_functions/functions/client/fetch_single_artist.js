const admin = require('firebase-admin')
const functions = require('firebase-functions')

module.exports = function (request, response) {
    if(request.method === "POST") {
        let artist = request.body.artist

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
    
    if (request.method === `OPTIONS`) {
        response.set('Access-Control-Allow-Origin', '*')
           .set('Access-Control-Allow-Methods', 'GET, POST')
           .status(200);
           return;
    }

    if (!request.body.artist) {
        response.status(402).send({error: 'Please provide artist name'})
        return;
    }

}