const admin = require('firebase-admin')
const functions = require('firebase-functions')

module.exports =  function(request, response){
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
    .collection('news_stories')
    .get()
    .then(snapshot => {
        let news_data = []
        snapshot.forEach( doc => {
            let data=doc.data()
            news_data.push(data)
        })
        let finalData = news_data.filter(data => data.client === artist);
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')
        response.status(200).send({data: finalData})
    })
    .catch( err => { 
        response.status(500).send({message: 'Error fetching news articles from DB', error: err})
    })
}