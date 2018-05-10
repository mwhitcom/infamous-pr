const admin = require('firebase-admin')
const functions = require('firebase-functions')
const creds = require('./firebase_creds.json')

const generateThumbnail = require('./image/generateThumbnail')

const postTwitter = require('./social/post_twitter');

admin.initializeApp(functions.config().firebase);

// SOCIAL POSTING
exports.postTwitter = functions.https.onRequest(postTwitter);

// IMAGE RESIZE
exports.generateThumbnail = functions.storage.object().onChange(generateThumbnail);

