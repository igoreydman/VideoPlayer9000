var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "X-Requested-With", "Content-Type", "Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var videos = [
  {
    id: 1,
    title: "The all-new Apple Music.",
    description: "The best way to experience all the music you love—even offline. Over 40 million songs. Thousands of handpicked playlists. Exclusive music and video premieres. New members get three months free.",
    iframe: '<div class ="container"><iframe class="video" src="https://www.youtube.com/embed/CQY3KUR3VzM" frameborder="0" allowfullscreen></iframe></div>',
    thumbnail: "http://img.youtube.com/vi/CQY3KUR3VzM/mqdefault.jpg"
  },
  {
    id: 2,
    title: "Apple – iPhone 7 and iPhone 7 Plus in 107 seconds",
    description: "Missed the launch of the new iPhone 7, iPhone 7 Plus, Apple Watch Series 2 and AirPods? Here it is in 107 seconds. Don’t blink.",
    iframe: '<div class ="container"><iframe class="video" src="https://www.youtube.com/embed/GeoUELDgyM4" frameborder="0" allowfullscreen></iframe></div>',
    thumbnail: "http://img.youtube.com/vi/GeoUELDgyM4/mqdefault.jpg"
  },
  {
    id: 3,
    title: "Apple – September Event 2016",
    description: "Apple Special Event. September 7, 2016.",
    iframe: '<div class ="container"><iframe class="video" src="https://www.youtube.com/embed/NS0txu_Kzl8" frameborder="0" allowfullscreen></iframe></div>',
    thumbnail: "http://img.youtube.com/vi/NS0txu_Kzl8/mqdefault.jpg"
  },
  {
    id: 4,
    title: "Apple – Health App - Mindfulness",
    description: "Take a moment to calm your mind.",
    iframe: '<div class ="container"><iframe class="video" src="https://www.youtube.com/embed/4CbfIUoUt4Y" frameborder="0" allowfullscreen></iframe></div>',
    thumbnail: "http://img.youtube.com/vi/4CbfIUoUt4Y/mqdefault.jpg"
  },
  {
    id: 5,
    title: "Apple – Health App - Nutrition",
    description: "Eat a little better.",
    iframe: '<div class ="container"><iframe class="video" src="https://www.youtube.com/embed/RbYWnu3Irjs" frameborder="0" allowfullscreen></iframe></div>',
    thumbnail: "http://img.youtube.com/vi/RbYWnu3Irjs/mqdefault.jpg"
  },
  {
    id: 6,
    title: "Apple – Health App - Activity",
    description: "Sit less, move more, and get some exercise.",
    iframe: '<div class ="container"><iframe class="video" src="https://www.youtube.com/embed/_bBvpQPq764" frameborder="0" allowfullscreen></iframe></div>',
    thumbnail: "http://img.youtube.com/vi/_bBvpQPq764/mqdefault.jpg"
  },
  {
    id: 7,
    title: "Apple – Health App - Sleep",
    description: "Stay consistent. Sleep better.",
    iframe: '<div class ="container"><iframe class="video" src="https://www.youtube.com/embed/PyK_ug8S_0E" frameborder="0" allowfullscreen></iframe></div>',
    thumbnail: "http://img.youtube.com/vi/PyK_ug8S_0E/mqdefault.jpg"
  }
];

app.get('/videos', function(req, res) {
  console.log("GET from server");
  res.send(videos);
});

app.listen(6069);