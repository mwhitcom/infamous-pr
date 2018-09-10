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

app
  .route('/artists/:id?')
  .get(artistsController.get)
  .post(artistsController.post)
  .patch(artistsController.patch)
  .delete(artistsController.deleteOne);

app.route('/artists/name/:name?').get(artistsController.getByName);

app
  .route('/news/:id?')
  .get(newsController.get)
  .post(newsController.post)
  .patch(newsController.patch)
  .delete(newsController.deleteOne);

app.route('/news/name/:name?').get(newsController.getByName);

app
  .route('/info')
  .get(infoController.get)
  .patch(infoController.patch);

app.route('/twitter').post(twitter);

exports.generateThumbnail = functions.storage
  .object()
  .onFinalize(generateThumbnail);

exports.api = functions.https.onRequest(app);
