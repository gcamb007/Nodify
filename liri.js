require("dotenv").config();

const axios = require("axios");
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const fs = require("fs");

const command = process.argv[2];
const input = process.argv[3];
console.log(command, input);

// Input commands =================================
if (command === "search-movie") {
    getMovie(input)
} else if (command === "search-song") {
    getSong(input)
} else if (command === "search-concert") {
    getConcert(input)
} else if (command === "feeling-lucky") {
    getLucky(input)
}

// Search-Concert ==========================
function getConcert() {
    // if (events === undefined || events === "") {
    //     events = "Mr.Nobody";
    // }
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=${keys.tickemaster.id}`)
        .then(
            function (result) {
                // console.log("The date of the event is: " + result.date);
                console.log(result);
            });
}

// Search-Song =============================
function getSong() {

    var spotify = new Spotify({
        id: process.env.SPOTIFY_ID,
        secret: process.env.SPOTIFY_SECRET,
    });

    spotify.search({
        type: "track",
        query: "The Sign",

    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        // console.log("The name of the artist  is: " + data.tracks.items[0].artist.name);
        // console.log("The name of the song is: " + data.tracks.items[0].track);
        // console.log("The link to the album is: " + data.tracks.items[0].uri);
        // console.log("The album that the song if from is: " + data.tracks.items[0].uri);
        console.log(data.tracks.items[0])
    });
}

// Search-Movie ============================
function getMovie(movie) {
    if (movie === undefined || movie === "") {
        movie = "Mr.Nobody";
    }
    //console.log(movie);

    axios.get(`http://www.omdbapi.com/?t=${movie}&y=&plot=short&apikey=${keys.omdb.id}`)
        .then(
            function (response) {
                console.log("The movie is: " + response.data.Title);
                console.log("The release year is: " + response.data.Year);
                console.log("The IMDB rating is: " + response.data.imdbRating);
                console.log("The country/countries where the movie was produce is/are: " + response.data.Country);
                console.log("The movie's language is: " + response.data.Language);
                console.log("The plot is: " + response.data.Plot);
                console.log("The movie's actors are: " + response.data.Actors);
                //console.log(response.data);
            }
        )
}

// feeling-lucky ===========================
function getLucky() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }

        const songTitle = data.split(", ");
        songTitle.forEach((songTitle) => {
            console.log(songTitle);
        });

    });
}