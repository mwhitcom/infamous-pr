const functions = require('firebase-functions');


const news_stoies = [
    {
        news_link: 'https://www.fastcompany.com/40495685/rooster-teeth-reveals-the-global-culture-war-at-the-heart-of-genlock',
        image_url: 'https://images.fastcompany.net/image/upload/w_1153,ar_16:9,c_fill,g_auto,f_auto,q_auto,fl_lossy/wp-cms/uploads/2017/11/p-1-how-rooster-teeth-plans-to-build-on-the-success-of-and8220rwbyand8221-with-and8220genlockand8221.jpg',
        title: 'Heart Of “Gen:Lock”',
        outlet_logo: '',
        tags: ['Rooster Teeth', 'Matt Witcomb']
    },
    {
        news_link: 'https://www.fastcompany.com/40495685/rooster-teeth-reveals-the-global-culture-war-at-the-heart-of-genlock',
        image_url: 'https://images.fastcompany.net/image/upload/w_1153,ar_16:9,c_fill,g_auto,f_auto,q_auto,fl_lossy/wp-cms/uploads/2017/11/p-1-how-rooster-teeth-plans-to-build-on-the-success-of-and8220rwbyand8221-with-and8220genlockand8221.jpg',
        title: 'Heart Of “Gen:Lock”',
        outlet_logo: '',
        tags: ['Rooster Teeth', 'Matt Witcomb']
    },
    {
        news_link: 'https://www.fastcompany.com/40495685/rooster-teeth-reveals-the-global-culture-war-at-the-heart-of-genlock',
        image_url: 'https://images.fastcompany.net/image/upload/w_1153,ar_16:9,c_fill,g_auto,f_auto,q_auto,fl_lossy/wp-cms/uploads/2017/11/p-1-how-rooster-teeth-plans-to-build-on-the-success-of-and8220rwbyand8221-with-and8220genlockand8221.jpg',
        title: 'Heart Of “Gen:Lock”',
        outlet_logo: '',
        tags: ['Rooster Teeth', 'Matt Witcomb']
    },
    {
        news_link: 'https://www.fastcompany.com/40495685/rooster-teeth-reveals-the-global-culture-war-at-the-heart-of-genlock',
        image_url: 'https://images.fastcompany.net/image/upload/w_1153,ar_16:9,c_fill,g_auto,f_auto,q_auto,fl_lossy/wp-cms/uploads/2017/11/p-1-how-rooster-teeth-plans-to-build-on-the-success-of-and8220rwbyand8221-with-and8220genlockand8221.jpg',
        title: 'Heart Of “Gen:Lock”',
        outlet_logo: '',
        tags: ['Rooster Teeth', 'Matt Witcomb']
    },
    {
        news_link: 'https://www.fastcompany.com/40495685/rooster-teeth-reveals-the-global-culture-war-at-the-heart-of-genlock',
        image_url: 'https://images.fastcompany.net/image/upload/w_1153,ar_16:9,c_fill,g_auto,f_auto,q_auto,fl_lossy/wp-cms/uploads/2017/11/p-1-how-rooster-teeth-plans-to-build-on-the-success-of-and8220rwbyand8221-with-and8220genlockand8221.jpg',
        title: 'Heart Of “Gen:Lock”',
        outlet_logo: '',
        tags: ['Rooster Teeth', 'Matt Witcomb']
    },
    {
        news_link: 'https://www.fastcompany.com/40495685/rooster-teeth-reveals-the-global-culture-war-at-the-heart-of-genlock',
        image_url: 'https://images.fastcompany.net/image/upload/w_1153,ar_16:9,c_fill,g_auto,f_auto,q_auto,fl_lossy/wp-cms/uploads/2017/11/p-1-how-rooster-teeth-plans-to-build-on-the-success-of-and8220rwbyand8221-with-and8220genlockand8221.jpg',
        title: 'Heart Of “Gen:Lock”',
        outlet_logo: '',
        tags: ['Rooster Teeth', 'Matt Witcomb']
    },
    {
        news_link: 'https://www.fastcompany.com/40495685/rooster-teeth-reveals-the-global-culture-war-at-the-heart-of-genlock',
        image_url: 'https://images.fastcompany.net/image/upload/w_1153,ar_16:9,c_fill,g_auto,f_auto,q_auto,fl_lossy/wp-cms/uploads/2017/11/p-1-how-rooster-teeth-plans-to-build-on-the-success-of-and8220rwbyand8221-with-and8220genlockand8221.jpg',
        title: 'Heart Of “Gen:Lock”',
        outlet_logo: '',
        tags: ['Rooster Teeth', 'Matt Witcomb']
    },
    {
        news_link: 'https://www.fastcompany.com/40495685/rooster-teeth-reveals-the-global-culture-war-at-the-heart-of-genlock',
        image_url: 'https://images.fastcompany.net/image/upload/w_1153,ar_16:9,c_fill,g_auto,f_auto,q_auto,fl_lossy/wp-cms/uploads/2017/11/p-1-how-rooster-teeth-plans-to-build-on-the-success-of-and8220rwbyand8221-with-and8220genlockand8221.jpg',
        title: 'Heart Of “Gen:Lock”',
        outlet_logo: '',
        tags: ['Rooster Teeth', 'Matt Witcomb']
    },
    {
        news_link: 'https://www.fastcompany.com/40495685/rooster-teeth-reveals-the-global-culture-war-at-the-heart-of-genlock',
        image_url: 'https://images.fastcompany.net/image/upload/w_1153,ar_16:9,c_fill,g_auto,f_auto,q_auto,fl_lossy/wp-cms/uploads/2017/11/p-1-how-rooster-teeth-plans-to-build-on-the-success-of-and8220rwbyand8221-with-and8220genlockand8221.jpg',
        title: 'Heart Of “Gen:Lock”',
        outlet_logo: '',
        tags: ['Rooster Teeth', 'Matt Witcomb']
    },
    {
        news_link: 'https://www.fastcompany.com/40495685/rooster-teeth-reveals-the-global-culture-war-at-the-heart-of-genlock',
        image_url: 'https://images.fastcompany.net/image/upload/w_1153,ar_16:9,c_fill,g_auto,f_auto,q_auto,fl_lossy/wp-cms/uploads/2017/11/p-1-how-rooster-teeth-plans-to-build-on-the-success-of-and8220rwbyand8221-with-and8220genlockand8221.jpg',
        title: 'Heart Of “Gen:Lock”',
        outlet_logo: '',
        tags: ['Rooster Teeth', 'Matt Witcomb']
    }
]


exports.fetch_news_stories = functions.https.onRequest((request, response) => {
 response.send({news_stoies});
});
