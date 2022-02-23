//  let album = {
//     artist: "The Clash",
//     genre: "punk",
//     year: 1977,
//     tracklist: [
//       { title: "Janie Jones", duration: "2:05" },
//       { title: "Remote Control", duration: "3:00" },
//       { title: "I'm So Bored With The U.S.A.", duration: "2:24" },
//       { title: "White Riot", duration: "1:55" },
//       { title: "Hate & War", duration: "2:05" },
//       { title: "What's My Name", duration: "1:40" },
//       { title: "Deny", duration: "3:03" },
//       { title: "London's Burning", duration: "2:10" },
//       { title: "Career Opportunities", duration: "1:51" },
//       { title: "48 Hours", duration: "1:34" },
//       { title: "Garageland", duration: "3:13" },
//     ],
//   };

/**
 * - Album
 *  - duration
 *
 * - Tracklist
 *
 * - Playlist
 *
 * - Song
 *  - title
 *  - duration
 *  - favourite
 */

class Album {
  constructor(artist, genre, year, tracklist) {
    this.artist = artist;
    this.genre = genre;
    this.year = year;
    this.tracklist = tracklist;
  }
  play() {
    for (let song of this.tracklist.songs) {
      console.log(`Playing: ${song.title} by ${this.artist}`);
    }
  }
}

class Song {
  constructor(title, duration) {
    this.title = title;
    this.duration = duration;
  }
}

class Tracklist {
  constructor() {
    this.songs = [];
  }
  addSong(song) {
    this.songs.push(song);
  }
  listSongs() {
    console.log(this.songs);
  }
}

//       { title: "Janie Jones", duration: "2:05" },
//       { title: "Remote Control", duration: "3:00" },
//       { title: "I'm So Bored With The U.S.A.", duration: "2:24" },

let song1 = new Song("Janie Jones", "2:05");
let song2 = new Song("Remote Control", "3:00");
let song3 = new Song("I'm So Bored With The U.S.A.", "2:24");

let tracklist1 = new Tracklist();

tracklist1.listSongs();
tracklist1.addSong(song1);
tracklist1.addSong(song2);
tracklist1.addSong(song3);
tracklist1.listSongs();

//     artist: "The Clash",
//     genre: "punk",
//     year: 1977,

let clashAlbum = new Album("The Clash", "punk", 1977, tracklist1);


console.log(clashAlbum);
clashAlbum.play();
