const admin = require('firebase-admin')
const functions = require('firebase-functions')

module.exports= function(request, response){

    response.set('Access-Control-Allow-Origin', "*")
    response.set('Access-Control-Allow-Methods', 'GET, POST')
    response.status(200).send(news_stoies);
}