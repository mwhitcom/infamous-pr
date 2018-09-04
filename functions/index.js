const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const functions = require('firebase-functions');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const generateThumbnail = require('./image/generateThumbnail');
const twitter = require('./social/twitter');
const artistsController = require('./controllers/artists');
const newsController = require('./controllers/news');
const infoController = require('./controllers/info');

var serviceAccount = require('./firebase_creds.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://infamous-pr.firebaseio.com',
});

admin.firestore().settings({ timestampsInSnapshots: true });

app.get('/artists/:name?', artistsController.get);

app.get('/news/:name?', newsController.get);

app.get('/info', infoController.get);

app.post('/twitter', twitter);

exports.generateThumbnail = functions.storage
  .object()
  .onFinalize(generateThumbnail);

exports.api = functions.https.onRequest(app);
