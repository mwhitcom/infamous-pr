const admin = require('firebase-admin')
const data = require('./news_stories.json')
var serviceAccount = require("./service_account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://infamous-pr.firebaseio.com"
});

const DB = admin.firestore()

module.exports = function(request,response){
    if(!request.body.data){response.status(204).send({error: 'Please provide Data'})}
    let data = request.body.data
    data.forEach(item => DB.firestore().collection('news_stories').add({item}))
    response.set('Access-Control-Allow-Origin', "*")
    response.set('Access-Control-Allow-Methods', 'GET, POST')
    response.status(202).send('success!')
}