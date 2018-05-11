const functions = require('firebase-functions')
const Twit = require('twit');

const T = new Twit({
  consumer_key: functions.config().twitter.consumer_key,
  consumer_secret: functions.config().twitter.consumer_secret,
  access_token: functions.config().twitter.access_token,
  access_token_secret: functions.config().twitter.access_token_secret,
});

module.exports = function (req, res) {
  const { tweet } = req.body

  if (!tweet) {
    res.status(400).send({
      message: 'Tweet is required.'
    })
  }

  const { link, copy } = tweet

  const postData = {
    status: `${copy} ${link}`
  }

  T.post('statuses/update', postData, (err, data, response) => {}).then(() => {
    res.status(200).send({
      message: 'Successfully posted to Twitter.'
    })
  }).catch((err) => {
    res.status(500).send({
      message: 'An error occurred posting to Twitter.',
      error: err.message
    })
  })
}