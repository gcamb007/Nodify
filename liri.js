require("dotenv").config();

const axios = require("axios");

const keys = require("./keys.js");

const Spotify = require('node-spotify-api');

const command = process.argv[2];
const input = process.argv[3];
console.log(command, input);

if (command === "movie") {
    getMovie(input)
} else if (command === "song") {
    getSong(input)
}

function getMovie(movie) {
    if (movie === undefined || movie === "") {
        movie = "Terminator";
    }
    console.log("movie", movie);
    axios.get(`http://www.omdbapi.com/?t=${movie}&y=&plot=short&apikey=${keys.omdb.id}`).then(
        function (response) {
            console.log("The movie is: " + response.data.Title);
            console.log("The release year is: " + response.data.Year);
            console.log("The IMDB rating is: " + response.data.imdbRating);
            console.log(response.data);
        }
    );
}

function getSong(song) {
    var spotify = new Spotify({
        id: keys.spotify.id,
        secret: keys.spotify.secret,
    });
    spotify.search({
        type: 'track',
        query: 'All the Small Things'
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data.tracks.items[0].name);
    });
}