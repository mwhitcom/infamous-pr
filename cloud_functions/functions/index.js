const admin = require('firebase-admin')
const functions = require('firebase-functions')
const creds = require('./firebase_creds.json')

const fetch_all_news = require('./client/fetch_all_news')
const fetch_artist_news = require('./client/fetch_artist_news')
const fetch_news_length = require('./client/fetch_news_length')
const fetch_all_artists = require('./client/fetch_all_artists')
const fetch_single_artist = require('./client/fetch_single_artist')
const fetch_dynamic_info = require('./client/fetch_dynamic_info')

const upload_artist_profile = require('./admin/upload_artist_profile')
const upload_dynamic_info = require('./admin/upload_dynamic_info')
const upload_news_article = require('./admin/upload_news_article')

admin.initializeApp(functions.config().firebase);

// Client Side Main Website 
// News Data Feeds 
exports.fetch_all_news = functions.https.onRequest(fetch_all_news)
exports.fetch_artist_news = functions.https.onRequest(fetch_artist_news)
exports.fetch_news_length = functions.https.onRequest(fetch_news_length)

//Artist Data Feeds 
exports.fetch_all_artists = functions.https.onRequest(fetch_all_artists)
exports.fetch_single_artist = functions.https.onRequest(fetch_single_artist)

// Misc Website Data and Info 
exports.fetch_dynamic_info = functions.https.onRequest(fetch_dynamic_info)


// ADMIN DATA UPLOAD FUNCTIONS 
exports.upload_artist_profile = functions.https.onRequest(upload_artist_profile)
exports.upload_dynamic_info = functions.https.onRequest(upload_dynamic_info)
exports.upload_news_article = functions.https.onRequest(upload_news_article)