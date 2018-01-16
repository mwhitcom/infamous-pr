const admin = require('firebase-admin')
const functions = require('firebase-functions')

module.exports = function(request, response){
    admin.firestore()
    .collection('news_stories')
    .orderBy('date')
    .limit(9)
    .get()
    .then(snapshot => {
        let news_data = []
        snapshot.forEach( doc => {
            let data=doc.data()
            news_data.push(data)
        })
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(200).send(news_data)
    })
    .catch( err => { 
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(500).send({message: 'Error fetching news articles from DB', error: err})
    })
}