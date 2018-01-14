import express from "express"
import path from "path"
import axios from "axios"
import {fetch_associated_news} from "./cloud_funk_node.js"


const data = [
    {
        "news_link": "http://uproxx.com/life/city-hearts-2017-images/",
        "image_url": "https://uproxx.files.wordpress.com/2017/11/cityheartsfest_jbphoto_55.jpg?quality=100&w=650",
        "title": "These Pics From City Hearts Festival Will Remind You That There’s Still Some Weirdness Left In The World",
        "outlet_logo": "https://upload.wikimedia.org/wikipedia/commons/6/67/Uproxx_logo.png",
        "tags": "Desert Hearts",
        "date": "December 10, 2017",
        "outlet": "Uproxx",
        "news_dek": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis nulla tristique, dignissim sem in, pellentesque ipsum. Vivamus pulvinar faucibus justo et interdum."
    },
    {
        "news_link": "http://www.billboard.com/articles/news/dance/8031319/pete-tong-delights-with-us-debut-of-ibiza-classics-at-hollywood-bowl",
        "image_url": "http://www.billboard.com/files/styles/article_main_image/public/media/pete-tong-ibiza-cr-Jar-Photo-2017-billboard-1548.jpg",
        "title": "Pete Tong Delights With U.S. Debut of 'Ibiza Classics' at Hollywood Bowl",
        "outlet_logo": "http://static3.businessinsider.com/image/5101498d69bedd4a15000003-547-162/screen%20shot%202013-01-24%20at%209.47.23%20am.png",
        "tags": "Pete Tong",
        "date": "December 8, 2017",
        "outlet": "Billboard",
        "news_dek": "The legendary voice of dance music took fans on a nostalgic, orchestral voyage of decades-spanning club anthems."
    },
    {
        "news_link": "http://www.complex.com/music/2017/11/gucci-gang-producer-bighead-interview",
        "image_url": "https://images.complex.com/complex/images/c_limit,w_679/fl_lossy,pg_1,q_auto/l8j7mg9gzpnokwcstszs/bighead-on-the-beat",
        "title": "'Gucci Gang' Producer Bighead Talks Sobriety and Squashing Beef With Lil Yachty",
        "outlet_logo": "http://www.completemusicup'date'.com/wp-content/uploads/2016/12/complexmag1250.jpg",
        "tags": "Splice",
        "date": "December 6, 2017",
        "outlet": "Complex",
        "news_dek": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis nulla tristique, dignissim sem in, pellentesque ipsum. Vivamus pulvinar faucibus justo et interdum."
    },
    {
        "news_link": "http://www.power106.com/blogs/thecruzshowblog/icymi-truth-or-dare-tuesday-hip-hop-know-it-all-dl-hughley-zaytoven-more",
        "image_url": "http://www.power106.com/sites/g/files/exi681/f/styles/large_730/public/article-images-featured/1099171-178901.png?itok=skO2dtol",
        "title": "#ICYMI: Truth Or Dare Tuesday, Hip-Hop Know-It-All, DL Hughley, Zaytoven + MORE On #TheCruzShow",
        "outlet_logo": "https://upload.wikimedia.org/wikipedia/en/f/f9/Power_106_logo_2013-present.png",
        "tags": "Zaytoven",
        "date": "December 5, 2017",
        "outlet": "Power 106",
        "news_dek": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis nulla tristique, dignissim sem in, pellentesque ipsum. Vivamus pulvinar faucibus justo et interdum."
    },
    {
        "news_link": "http://variety.com/2017/music/reviews/concert-review-pete-tong-takes-victory-lap-for-dance-music-with-a-full-orchestra-at-hollywood-bowl-1202612308/",
        "image_url": "https://pmcvariety.files.wordpress.com/2017/11/pete-tong-ibiza-classics.jpg?w=700&h=393&crop=1",
        "title": "Concert Review: Pete Tong Takes Victory Lap for Dance Music — With a Full Orchestra — at Hollywood Bowl",
        "outlet_logo": "https://upload.wikimedia.org/wikipedia/commons/7/70/Variety_Logo.png",
        "tags": "Pete Tong",
        "date": "December 5, 2017",
        "outlet": "Variety",
        "news_dek": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis nulla tristique, dignissim sem in, pellentesque ipsum. Vivamus pulvinar faucibus justo et interdum."
    },
    {
        "news_link": "http://uproxx.com/life/city-hearts-2017-images/",
        "image_url": "https://uproxx.files.wordpress.com/2017/11/cityheartsfest_jbphoto_55.jpg?quality=100&w=650",
        "title": "These Pics From City Hearts Festival Will Remind You That There’s Still Some Weirdness Left In The World",
        "outlet_logo": "https://upload.wikimedia.org/wikipedia/commons/6/67/Uproxx_logo.png",
        "tags": "Desert Hearts",
        "date": "December 5, 2017",
        "outlet": "Uproxx",
        "news_dek": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis nulla tristique, dignissim sem in, pellentesque ipsum. Vivamus pulvinar faucibus justo et interdum."
    },
    {
        "news_link": "http://www.billboard.com/articles/news/dance/8031319/pete-tong-delights-with-us-debut-of-ibiza-classics-at-hollywood-bowl",
        "image_url": "http://www.billboard.com/files/styles/article_main_image/public/media/pete-tong-ibiza-cr-Jar-Photo-2017-billboard-1548.jpg",
        "title": "Pete Tong Delights With U.S. Debut of 'Ibiza Classics' at Hollywood Bowl",
        "outlet_logo": "http://static3.businessinsider.com/image/5101498d69bedd4a15000003-547-162/screen%20shot%202013-01-24%20at%209.47.23%20am.png",
        "tags": "Pete Tong",
        "date": "December 5, 2017",
        "outlet": "Billboard",
        "news_dek": "The legendary voice of dance music took fans on a nostalgic, orchestral voyage of decades-spanning club anthems."
    },
    {
        "news_link": "http://www.complex.com/music/2017/11/gucci-gang-producer-bighead-interview",
        "image_url": "https://images.complex.com/complex/images/c_limit,w_679/fl_lossy,pg_1,q_auto/l8j7mg9gzpnokwcstszs/bighead-on-the-beat",
        "title": "'Gucci Gang' Producer Bighead Talks Sobriety and Squashing Beef With Lil Yachty",
        "outlet_logo": "http://www.completemusicup'date'.com/wp-content/uploads/2016/12/complexmag1250.jpg",
        "tags": "Splice",
        "date": "December 5, 2017",
        "outlet": "Complex",
        "news_dek": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis nulla tristique, dignissim sem in, pellentesque ipsum. Vivamus pulvinar faucibus justo et interdum."
    },
    {
        "news_link": "http://www.power106.com/blogs/thecruzshowblog/icymi-truth-or-dare-tuesday-hip-hop-know-it-all-dl-hughley-zaytoven-more",
        "image_url": "http://www.power106.com/sites/g/files/exi681/f/styles/large_730/public/article-images-featured/1099171-178901.png?itok=skO2dtol",
        "title": "#ICYMI: Truth Or Dare Tuesday, Hip-Hop Know-It-All, DL Hughley, Zaytoven + MORE On #TheCruzShow",
        "outlet_logo": "https://upload.wikimedia.org/wikipedia/en/f/f9/Power_106_logo_2013-present.png",
        "tags": "Zaytoven",
        "date": "December 5, 2017",
        "outlet": "Power 106",
        "news_dek": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis nulla tristique, dignissim sem in, pellentesque ipsum. Vivamus pulvinar faucibus justo et interdum."
    }
]
  
const clients = [
    {
      "name": "Pete Tong",
      "image": "https://ichef.bbci.co.uk/images/ic/1200x675/p02xxgn9.jpg"
    },
    {
      "name": "Claude VonStroke",
      "image": "http://cdn.globaldanceelectronic.com/wp-content/uploads/2016/09/Claude-VonStroke.jpg"
    },
    {
      "name": "Eric Prydz",
      "image": "http://mixmag.net/assets/uploads/images/_full/20121011-eric-prydz-624x420-1349982567.jpg"
    },
    {
      "name": "Guy Gerber",
      "image": "https://geo-media.beatport.com/'image'/d99f99e9-337e-4f90-a0ea-5ccd807455cc.jpg"
    },
    {
      "name": "Michael Brun",
      "image": "https://www.billboard.com/files/styles/article_main_image/public/media/michael-braun-2014-press-billboard-650.jpg"
    },
    {
      "name": "Paul Van Dyk",
      "image": "http://www.tribalmixes.com/pic/dj/new/Paul_van_Dyk_02.jpg"
    }    
] 

const web_data = {
     "footer_name": 'Infamous PR',
     "footer_address": '8511 Washington Blvd, Culver City, CA 90232',
     "footer_signature": 'Site Designed by FunBot',
     "background_video_url": 'https://www.youtube.com/watch?v=1BV7_O3f56w',
     "background_image": 'http://phishthoughts.com/wp-content/uploads/2012/08/DSC00256-copy-1.jpg',
}

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(`${__dirname}/public`));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});


app.listen(port, () => {
  console.log(`App is listening on ${port}`);

  fetch_associated_news('Pete Tong')
 
});


