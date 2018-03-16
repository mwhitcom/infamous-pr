const admin = require('firebase-admin')
const functions = require('firebase-functions')

module.exports = function(request, response){
    const client = JSON.parse(Object.keys(request.body)[0]).client;
    const id = client.id
    delete client.id

    if (request.method === `OPTIONS`) {
        response.set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Methods', 'GET, POST')
            .set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
            .set('Content-Type', 'application/json')
            .status(200);
        return;
    }

    if (!client) {
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(402).send({error: 'Please provide artist name'});
        return;
    }

    admin.firestore()
    .collection('artists')
    .doc(id)
    .update(client)
    .then(()=>{
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(200).send({message: `${id} profile uploaded !!!`, data: {data: client, id}})
    })
    .catch( err => { 
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(500).send({message:`Error uploading ${id} profile`, error: err})
    })
}