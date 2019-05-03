console.log("Here's your info:");

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET,
};

exports.tickemaster = {
  id: process.env.TICKETMASTER_ID,
  secret: process.env.TICKETMASTER_SECRET,
};

exports.omdb = {
  id: process.env.OMDB_ID,
};