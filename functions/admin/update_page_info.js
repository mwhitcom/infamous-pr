const admin = require('firebase-admin')
const functions = require('firebase-functions')

module.exports = function(request, response){
    const info = JSON.parse(Object.keys(request.body)[0]).info;

    if (request.method === `OPTIONS`) {
        response.set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Methods', 'GET, POST')
            .set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
            .set('Content-Type', 'application/json')
            .status(200);
        return;
    }

    if (!info) {
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(402).send({error: 'Please provide artist name'});
        return;
    }

    admin.firestore()
    .collection('infamous')
    .doc('page_info')
    .update(info)
    .then(()=>{
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(200).send({message: 'page info updated', data: info })
    })
    .catch( err => { 
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(500).send({message:'Error updating page info', error: err})
    })
}