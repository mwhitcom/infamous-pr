const functions = require('firebase-functions')
const admin = require('firebase-admin')

module.exports = function(request,response){
    if(!request.body.data){response.status(204).send({error: 'Please provide Data'})}
    let data = request.body.data
    data.map(item => admin.firestore().collection('news_stories').add({item}))
    response.set('Access-Control-Allow-Origin', "*")
    response.set('Access-Control-Allow-Methods', 'GET, POST')
    response.status(202).send('success!')
}