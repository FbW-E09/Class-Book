let album = {
  artist: "The Clash",
  genre: "punk",
  year: 1977,
  tracklist: [
    { title: "Janie Jones", duration: "2:05" },
    { title: "Remote Control", duration: "3:00" },
    { title: "I'm So Bored With The U.S.A.", duration: "2:24" },
    { title: "White Riot", duration: "1:55" },
    { title: "Hate & War", duration: "2:05" },
    { title: "What's My Name", duration: "1:40" },
    { title: "Deny", duration: "3:03" },
    { title: "London's Burning", duration: "2:10" },
    { title: "Career Opportunities", duration: "1:51" },
    { title: "48 Hours", duration: "1:34" },
    { title: "Garageland", duration: "3:13" },
  ],
};

let albumCopy = { ...album }; // shallow copy
// task 1

function addDurationToTrack(track) {
  let trackCopy = { ...track };
  let duration = track.duration;
  let minutesAndSeconds = duration.split(":");
  let durationInSeconds =
    parseInt(minutesAndSeconds[0]) * 60 + parseInt(minutesAndSeconds[1]);
  trackCopy.durationInSeconds = durationInSeconds;
  return trackCopy;
}

let newTracklist = albumCopy.tracklist.map(addDurationToTrack);
console.log(newTracklist);

albumCopy.tracklist = newTracklist;

let sortedTracklist = newTracklist.sort(
  (trackA, trackB) => trackB.durationInSeconds - trackA.durationInSeconds
);
console.log("sorted tracklist", sortedTracklist);

albumCopy.durationInSeconds = albumCopy.tracklist.reduce(
  (previous, current) => {
    return previous + current.durationInSeconds;
  },
  0
);

// 25:00

albumCopy.duration = `${Math.floor(albumCopy.durationInSeconds / 60)}:${
  albumCopy.durationInSeconds % 60 < 10
    ? "0" + (albumCopy.durationInSeconds % 60)
    : albumCopy.durationInSeconds % 60
}`;

console.log(albumCopy);
// /**
//  *
//  * 1. Use the .map() function to transform the tracklist array: add a new property to each track called durationInSeconds,
//  * calculated from duration. Example: duration: 2:30 => durationInSeconds 150
//  * 2. sort the tracks by duration in descending order, from the longest to the shortest one. Save the result in a new array
//  * 3. add a new property "durationInSeconds" to the main "album" object adding the total duration of the album in seconds
//  * 4. add a new property "duration" to the main "album" object with the duration represented as a string. Example: duration: "35:53"
//  *
//  * IMPORTANT: the original array must not be changed
//  */
