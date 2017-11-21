const functions = require('firebase-functions');


const news_stoies = [
    {
        news_link: 'http://uproxx.com/life/city-hearts-2017-images/',
        image_url: 'https://uproxx.files.wordpress.com/2017/11/cityheartsfest_jbphoto_55.jpg?quality=100&w=650',
        title: 'These Pics From City Hearts Festival Will Remind You That There’s Still Some Weirdness Left In The World',
        outlet_logo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Uproxx_logo.png',
        tags: 'Desert Hearts',
        news_dek: ''
    },
    {
        news_link: 'http://www.billboard.com/articles/news/dance/8031319/pete-tong-delights-with-us-debut-of-ibiza-classics-at-hollywood-bowl',
        image_url: 'http://www.billboard.com/files/styles/article_main_image/public/media/pete-tong-ibiza-cr-Jar-Photo-2017-billboard-1548.jpg',
        title: 'Pete Tong Delights With U.S. Debut of "Ibiza Classics" at Hollywood Bowl',
        outlet_logo: 'http://static3.businessinsider.com/image/5101498d69bedd4a15000003-547-162/screen%20shot%202013-01-24%20at%209.47.23%20am.png',
        tags: 'Pete Tong',
        news_dek: 'The legendary voice of dance music took fans on a nostalgic, orchestral voyage of decades-spanning club anthems.'
    },
    {
        news_link: 'http://www.complex.com/music/2017/11/gucci-gang-producer-bighead-interview',
        image_url: 'https://images.complex.com/complex/images/c_limit,w_679/fl_lossy,pg_1,q_auto/l8j7mg9gzpnokwcstszs/bighead-on-the-beat',
        title: '"Gucci Gang" Producer Bighead Talks Sobriety and Squashing Beef With Lil Yachty',
        outlet_logo: 'http://www.completemusicupdate.com/wp-content/uploads/2016/12/complexmag1250.jpg',
        tags: 'Splice',
        news_dek: ''
    },
    {
        news_link: 'http://www.power106.com/blogs/thecruzshowblog/icymi-truth-or-dare-tuesday-hip-hop-know-it-all-dl-hughley-zaytoven-more',
        image_url: 'http://www.power106.com/sites/g/files/exi681/f/styles/large_730/public/article-images-featured/1099171-178901.png?itok=skO2dtol',
        title: '#ICYMI: Truth Or Dare Tuesday, Hip-Hop Know-It-All, DL Hughley, Zaytoven + MORE On #TheCruzShow',
        outlet_logo: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Power_106_logo_2013-present.png',
        tags: 'Zaytoven',
        news_dek: ''
    },
    {
        news_link: 'http://variety.com/2017/music/reviews/concert-review-pete-tong-takes-victory-lap-for-dance-music-with-a-full-orchestra-at-hollywood-bowl-1202612308/',
        image_url: 'https://pmcvariety.files.wordpress.com/2017/11/pete-tong-ibiza-classics.jpg?w=700&h=393&crop=1',
        title: 'Concert Review: Pete Tong Takes Victory Lap for Dance Music — With a Full Orchestra — at Hollywood Bowl',
        outlet_logo: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Variety_Logo.png',
        tags: 'Pete Tong',
        news_dek: ''
    },
    {
        news_link: 'http://uproxx.com/life/city-hearts-2017-images/',
        image_url: 'https://uproxx.files.wordpress.com/2017/11/cityheartsfest_jbphoto_55.jpg?quality=100&w=650',
        title: 'These Pics From City Hearts Festival Will Remind You That There’s Still Some Weirdness Left In The World',
        outlet_logo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Uproxx_logo.png',
        tags: 'Desert Hearts',
        news_dek: ''
    },
    {
        news_link: 'http://www.billboard.com/articles/news/dance/8031319/pete-tong-delights-with-us-debut-of-ibiza-classics-at-hollywood-bowl',
        image_url: 'http://www.billboard.com/files/styles/article_main_image/public/media/pete-tong-ibiza-cr-Jar-Photo-2017-billboard-1548.jpg',
        title: 'Pete Tong Delights With U.S. Debut of "Ibiza Classics" at Hollywood Bowl',
        outlet_logo: 'http://static3.businessinsider.com/image/5101498d69bedd4a15000003-547-162/screen%20shot%202013-01-24%20at%209.47.23%20am.png',
        tags: 'Pete Tong',
        news_dek: 'The legendary voice of dance music took fans on a nostalgic, orchestral voyage of decades-spanning club anthems.'
    },
    {
        news_link: 'http://www.complex.com/music/2017/11/gucci-gang-producer-bighead-interview',
        image_url: 'https://images.complex.com/complex/images/c_limit,w_679/fl_lossy,pg_1,q_auto/l8j7mg9gzpnokwcstszs/bighead-on-the-beat',
        title: '"Gucci Gang" Producer Bighead Talks Sobriety and Squashing Beef With Lil Yachty',
        outlet_logo: 'http://www.completemusicupdate.com/wp-content/uploads/2016/12/complexmag1250.jpg',
        tags: 'Splice',
        news_dek: ''
    },
    {
        news_link: 'http://www.power106.com/blogs/thecruzshowblog/icymi-truth-or-dare-tuesday-hip-hop-know-it-all-dl-hughley-zaytoven-more',
        image_url: 'http://www.power106.com/sites/g/files/exi681/f/styles/large_730/public/article-images-featured/1099171-178901.png?itok=skO2dtol',
        title: '#ICYMI: Truth Or Dare Tuesday, Hip-Hop Know-It-All, DL Hughley, Zaytoven + MORE On #TheCruzShow',
        outlet_logo: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Power_106_logo_2013-present.png',
        tags: 'Zaytoven',
        news_dek: ''
    },
    {
        news_link: 'http://variety.com/2017/music/reviews/concert-review-pete-tong-takes-victory-lap-for-dance-music-with-a-full-orchestra-at-hollywood-bowl-1202612308/',
        image_url: 'https://pmcvariety.files.wordpress.com/2017/11/pete-tong-ibiza-classics.jpg?w=700&h=393&crop=1',
        title: 'Concert Review: Pete Tong Takes Victory Lap for Dance Music — With a Full Orchestra — at Hollywood Bowl',
        outlet_logo: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Variety_Logo.png',
        tags: 'Pete Tong',
        news_dek: ''
    }
];

exports.fetch_news_stories = functions.https.onRequest((request, response) => {
    response.set('Access-Control-Allow-Origin', "*")
    response.set('Access-Control-Allow-Methods', 'GET, POST')
    response.status(200).send(news_stoies);
});
