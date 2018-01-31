const admin = require('firebase-admin')
const functions = require('firebase-functions')

module.exports = function(request, response){
    if (!request.body) {
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(402).send({error: 'No Data Provided ... '})
    }
    let dynamic_data = request.body.dynamic_data
        admin.firestore().collection('infamous')
        .doc('dynamic_info')
        .update(dynamic_data, { create: true })
        .then(()=>{
            response.set('Access-Control-Allow-Origin', "*")
            response.set('Access-Control-Allow-Methods', 'GET, POST')
            response.status(402).send({message: 'Dynamic data succesfully updated!!'})
        })
        .catch(err => {
            response.set('Access-Control-Allow-Origin', "*")
            response.set('Access-Control-Allow-Methods', 'GET, POST')
            response.status(500).send({message: `Dynamic data updated FAILED!!!`, error: err})
        })
}