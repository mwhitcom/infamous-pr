const admin = require('firebase-admin')
const functions = require('firebase-functions')

module.exports = function (request, response) {
    admin.firestore()
        .collection('artists')
        .get()
        .then(snapshot => {
            let artists = []
            let labels = []
            let festivals = []
            let events = []
            let brands = []
            let tech = []
            let fullList = []
            snapshot.forEach(item => {
                let data = item.data()
                fullList.push(data);
                switch (data.type) {
                    case 'artist':
                        artists.push(data)
                        break
                    case 'label':
                        labels.push(data)
                        break
                    case 'festival':
                        festivals.push(data)
                        break
                    case 'event':
                        events.push(data)
                        break
                    case 'brand':
                        brands.push(data)
                        break
                    case 'tech':
                        tech.push(data)
                        break
                }
            })
            response.set('Access-Control-Allow-Origin', "*")
            response.set('Access-Control-Allow-Methods', 'GET, POST')
            response.status(200).send({ data: {artists: artists, labels: labels, festivals: festivals, events:events, brands: brands, tech: tech, fullList: fullList } })
        })
        .catch(err => {
            response.set('Access-Control-Allow-Origin', "*")
            response.set('Access-Control-Allow-Methods', 'GET, POST')
            response.status(500).send({ message: 'Error fetching Artists data', error: err })
        })
}

{/* <ClientContainer type={'ARTISTS'} list={Data.clients} />
            <ClientContainer type={'LABELS'} list={Data.clients} />
            <ClientContainer type={'FESTIVALS'} list={Data.clients} />
            <ClientContainer type={'EVENTS'} list={Data.clients} />
            <ClientContainer type={'BRANDS'} list={Data.clients} />
            <ClientContainer type={'TECH'} list={Data.clients} /> */}