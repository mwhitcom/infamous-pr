const admin = require('firebase-admin')
const functions = require('firebase-functions')

module.exports = function(request, response){
    admin.firestore()
    .collection('infamous')
    .doc('dynamic_info')
    .get()
    .then(item => {
        let data = item.data()
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(200).send(data)
    })
    .catch( err => { 
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(500).send({message: 'Failed to fetch dynamic info from DB', error: err})
    })
}