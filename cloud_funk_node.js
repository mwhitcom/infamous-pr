import admin from "firebase-admin"
import functions from 'firebase-functions'
import serviceAccount from './firebase_creds.json'




admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://infamous-pr.firebaseio.com"
});

export  function fetch_artist_news(artist){
  console.log(artist)
     admin.firestore()
    .collection('news_stories')
    .onSnapshot( snap => snap.forEach(snaps => snaps.tags? console.log(snaps.data()): null ))
    //  .then(docs=> docs.forEach(doc => console.log(doc.data())))
    // .catch(e => console.log(`***************\n ${e}`))
}

export  function upload_news_article(data){
   data.map(item => admin.firestore().collection('news_stories').add({item}))
} 



