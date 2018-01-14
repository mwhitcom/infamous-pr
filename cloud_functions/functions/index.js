
const admin = require('firebase-admin')
const functions = require('firebase-functions')
const creds = require('./firebase_creds.json')
const fetch_news_stories = require('./fetch_news_stories')
const data_upload = require('./data_upload.js')
const fetch_artist_news = require('./fetch_artist_news')

admin.initializeApp(functions.config().firebase);

exports.fetch_news_stories = functions.https.onRequest(fetch_news_stories)
exports.data_upload = functions.https.onRequest(data_upload)
exports.fetch_artist_news = functions.https.onRequest(fetch_artist_news)