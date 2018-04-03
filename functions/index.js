const admin = require('firebase-admin')
const functions = require('firebase-functions')
const creds = require('./firebase_creds.json')

const fetch_all_news = require('./news/fetch_all_news')
const fetch_artist_news = require('./news/fetch_artist_news')
const update_news_article = require('./news/update_news_article')
const create_news_article = require('./news/create_news_article')
const delete_news_article = require('./news/delete_news_article')

const fetch_all_artists = require('./clients/fetch_all_artists')
const fetch_single_artist = require('./clients/fetch_single_artist')
const update_client_profile = require('./clients/update_client_profile')
const create_client_profile = require('./clients/create_client_profile')
const delete_client_profile = require('./clients/delete_client_profile')
const update_client_status = require('./clients/update_client_status')

const fetch_dynamic_info = require('./siteInfo/fetch_dynamic_info')
const update_page_info = require('./siteInfo/update_page_info')

const generateThumbnail = require('./image/generateThumbnail')

admin.initializeApp(functions.config().firebase);

// Client Side Main Website 
// News Data Feeds 
exports.fetch_all_news = functions.https.onRequest(fetch_all_news)
exports.fetch_artist_news = functions.https.onRequest(fetch_artist_news)

//Artist Data Feeds 
exports.fetch_all_artists = functions.https.onRequest(fetch_all_artists)
exports.fetch_single_artist = functions.https.onRequest(fetch_single_artist)

// Misc Website Data and Info 
exports.fetch_dynamic_info = functions.https.onRequest(fetch_dynamic_info)

// ADMIN FULL INFO
exports.update_page_info = functions.https.onRequest(update_page_info)

// ADMIN NEWS
exports.create_news_article = functions.https.onRequest(create_news_article)
exports.update_news_article = functions.https.onRequest(update_news_article)
exports.delete_news_article = functions.https.onRequest(delete_news_article)

// ADMIN CLIENT
exports.create_client_profile = functions.https.onRequest(create_client_profile)
exports.update_client_profile = functions.https.onRequest(update_client_profile)
exports.delete_client_profile = functions.https.onRequest(delete_client_profile)
exports.update_client_status = functions.https.onRequest(update_client_status)

// IMAGE RESIZE
exports.generateThumbnail = functions.storage.object().onChange(generateThumbnail);

