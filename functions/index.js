const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')
const functions = require('firebase-functions')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

const generateThumbnail = require('./image/generateThumbnail')

const twitter = require('./social/twitter');

admin.initializeApp();

app.post('/twitter', twitter)

// IMAGE RESIZE
exports.generateThumbnail = functions.storage.object().onChange(generateThumbnail);

exports.api = functions.https.onRequest(app)