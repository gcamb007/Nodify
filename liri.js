require("dotenv").config();

const keys = require("./keys.js");

const spotify = new Spotify(keys.spotify);




// ========== date-fns code ==============================
// var isToday = require('date-fns/is_today')
// isToday(new Date())
// //=> true

// ========== This is an example from the Spotify API ==============

//var Spotify = require('node-spotify-api');
//var spotify = new Spotify({
//   id: <your spotify client id>,
//   secret: <your spotify client secret>
// });

// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }

// console.log(data); 
// });