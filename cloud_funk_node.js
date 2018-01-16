import admin from "firebase-admin"
import functions from 'firebase-functions'
import serviceAccount from './firebase_creds.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://infamous-pr.firebaseio.com"
});

export  function fetch_all_news(){
     admin.firestore()
     .collection('news_stories')
     .orderBy('date')
     .limit(3)
     .get()
     .then(snapshot=> {snapshot.forEach(doc=> {let data=doc.data(); console.log(data)})})
     .catch( err => console.error(err))
}
export function fetch_all_artists(){
    admin.firestore()
    .collection('artists')
    .get()
    .then(snapshot=> {snapshot.forEach(doc=> {let data=doc.data(); console.log(data)})})
    .catch( err => console.error(err))
}
export function fetch_associated_news(artist){
    admin.firestore()
    .collection('news_stories')
    .get()
    .then(snapshot => {
        let results = []
        snapshot.forEach(item=> {
            let data = item.data()
            data.tags == artist? results.push(data): null
        }) 
        console.log('********************************* \n')
        console.log(results)
        console.log('********************************* \n')
    })
    .catch(err => console.log(err))
}

export function fetch_single_artist(name){
    admin.firestore()
    .collection('artists')
    .doc(name.toUpperCase())
    .get()
    .then(doc => {let data = doc.data(); console.log(data)})
    .catch(err => console.log(`Error Fetching Single Artist profile \n ${err}`))
}


// UPLOADS  
export  function upload_news_article(item){
   admin.firestore()
   .collection('news_stories')
   .add(item)
   .then(ref => {
        let id ={ id: ref.id }
        admin.firestore()
        .collection('news_stories')
        .doc(id.id)
        .update(id, {create: true})
        .then(()=> console.log('SUCCESS!!!!'))
   })
   .catch(err => console.error(err))
} 

// export function upload_artist_profile(artist_data){
//     artist_data.forEach(item => admin.firestore().collection('artists').doc(item.name.toUpperCase()).update(item, { create: true }))
//     console.log(`${artist_data.length} Docs added`)
// }
// export function upload_website_misc(website_data){
   
//         admin.firestore().collection('infamous').doc('dynamic_info')
//         .update(website_data, { create: true })
//         .then(()=>{console.log(website_data)})
   
// }


// export  function test(){
//     admin.firestore()
//     .collection('news_stories')
//     .get()
//     .then(snapshot=> console.log(snapshot.size))
//     .catch( err => console.error(err))
// }