const functions = require('firebase-functions')
const Twit = require('twit');

const T = new Twit({
  consumer_key: functions.config().twitter.consumer_key,
  consumer_secret: functions.config().twitter.consumer_secret,
  access_token: functions.config().twitter.access_token,
  access_token_secret: functions.config().twitter.access_token_secret,
});

module.exports = function(request, response){

  const tweet = JSON.parse(Object.keys(request.body)[0]).tweet;
  tweet.copy = tweet.copy.replace(/~/g, '&').replace(/!/g, '%');
  tweet.link = tweet.link.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%');

  if (request.method === `OPTIONS`) {
    response.set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST')
      .set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
      .set('Content-Type', 'application/json')
      .status(200);
    return;
  }

  if (!tweet) {
    response.set('Access-Control-Allow-Origin', "*")
    response.set('Access-Control-Allow-Methods', 'GET, POST')
    response.status(402).send({error: 'Please provide artist name'});
    return;
  }

  const postData = {
    status: `${tweet.copy} ${tweet.link}`
  }

  T.post('statuses/update', postData, (err, data, response) => {
    console.log(data);
  }).then((data) => {
    response.set('Access-Control-Allow-Origin', "*")
    response.set('Access-Control-Allow-Methods', 'GET, POST')
    response.status(200).send({data});
  }).catch( err => { 
    response.set('Access-Control-Allow-Origin', "*")
    response.set('Access-Control-Allow-Methods', 'GET, POST')
    response.status(500).send({message: 'Failed to fetch dynamic info from DB', error: err})
  })
}