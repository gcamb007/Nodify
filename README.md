# Nodify
#Liri Bot App

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## LIRI uses the following commands:
   * `search-concerts`

   * `search-songs`

   * `search-movies`

   * `feeling-lucky`

## Technologies used:

    * Node.js
    
    * Javascript

## npm packages: 

   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)\

   * [Ticketmaster API](https://developer.ticketmaster.com/products-and-docs/apis/getting-started/)

   * [OMDB API](http://www.omdbapi.com)

   * [Axios](https://www.npmjs.com/package/axios)

   * [Date-FNS](https://date-fns.org/docs/Getting-Started) / Moment

   * [DotEnv](https://www.npmjs.com/package/dotenv)

## How to Run LIRI-Bot
* 1. `node liri.js search-concerts <artist/band name here>`

   * This will search the TicketMaster Artist Events API for an artist and render the following information about each event to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event (use date-fns to format this as "MM/DD/YYYY")

2. `node liri.js search-songs '<song name here>'`

   * This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

   * If no song is provided then your program will default to "The Sign" by Ace of Base.

3. `node liri.js search-movies '<movie name here>'`
   * This will output the following information to your terminal/bash window:
     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```
   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

4. `node liri.js feeling-lucky`
   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

## Author
* **Gerardo Cambronero** 
