let songs = [
  "Dark Chest of Wonders",
  "Wish I Had an Angel",
  "Nemo",
  "Planet Hell",
  "Creek Mary's Blood",
];

/**
 * Use map to get in output something like this:
 * [
 *  {
 *      title: "Drak Chest of Wonders",
 *      trackNumber: 1,
 *      trackPosition: "1 of 5",
 *      tracksTotal: 5,
 *  },
 *  {
 *      title: "Wish I had an Angel",
 *      trackNumber: 2,
 *      trackPosition: "2 of 5",
 *      tracksTotal: 5,
 *  },
 * ...
 * ]
 */

function formatSongs(song, index, array) {
  const songObject = {
    title: song,
    trackNumber: index + 1,
    trackPosition: `${index + 1} of ${array.length}`,
    tracksTotal: array.length,
  };
  return songObject;
}

console.log(songs.map(formatSongs));
