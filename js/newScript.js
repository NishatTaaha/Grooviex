const body = document.querySelector("body"),
  sideBar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".searchBox"),
  modeSwitch = body.querySelector(".toggleSwitch"),
  modeText = body.querySelector(".modeText");

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    modeText.innerText = "Dark Mode";
  } else {
    modeText.innerText = "Light Mode";
  }
});

const music = new Audio("audio/1.mp3");
// music.play();

// -------------------------
// SideMenu Song Code
// -----------------------
const songs = [
  {
    id: "1",
    songName: "Cholo Sobai",
    songAudio: "audio/1.mp3",
    subtitle: "Fuad",
    poster: "img/1.jpg",
    classname: "Bengali Happiness",
    type: "Bengali",
  },
  {
    id: "2",
    songName: "Mausam Mausam",
    songAudio: "audio/2.mp3",
    subtitle: "KK",
    poster: "img/2.jpg",
    classname: "Hindi Love",
    type: "Hindi",
  },
  // all object type
  {
    id: "3",
    songName: "Banglalink",
    songAudio: "audio/3.mp3",
    subtitle: "Habib",
    poster: "img/3.jpg",
    classname: "Bengali",
    type: "Bengali",
  },
  {
    id: "4",
    songName: "Perfect",
    songAudio: "audio/4.mp3",
    subtitle: "Ed Sheeran",
    poster: "img/4.jpg",
    classname: "English",
    type: "English",
  },
  {
    id: "5",
    songName: "Govire Jaw",
    songAudio: "audio/5.mp3",
    subtitle: "Anupam",
    poster: "img/5.jpg",
    classname: "Bengali Love",
    type: "Bengali",
  },
  {
    id: "6",
    songName: "Tum Hi Ho",
    songAudio: "audio/6.mp3",
    subtitle: "Arijit Singh",
    poster: "img/6.jpg",
    classname: "Hindi Love",
    type: "Hindi",
  },
  {
    id: "7",
    // songAudio:
    songName: "Bondhu Vabo ki",
    songAudio: "audio/7.mp3",
    subtitle: "Topu",
    poster: "img/7.jpg",
    classname: "Bengali Love",
    type: "Bengali",
  },
  {
    id: "8",
    songName: "Magnificent Century",
    songAudio: "audio/8.mp3",
    subtitle: "Magnificent Century",
    poster: "img/8.jpg",
    classname: "Violin",
    type: "Violin",
  },
  {
    id: "9",
    songName: "Murir Tin",
    songAudio: "audio/9.mp3",
    subtitle: "Coke Studio",
    poster: "img/9.jpg",
    classname: "Bengali Happiness",
    type: "Bengali",
  },
  {
    id: "10",
    songName: "Pika Pika",
    songAudio: "audio/10.mp3",
    subtitle: "Pikacchu",
    poster: "img/10.jpg",
    classname: "Happiness",
    type: "English",
  },
  {
    id: "11",
    songName: "Neela",
    songAudio: "audio/11.mp3",
    subtitle: "Noble",
    poster: "img/11.jpg",
    classname: "Bengali Love",
    type: "Bengali",
  },
  {
    id: "12",
    songName: "Opare",
    songAudio: "audio/12.mp3",
    subtitle: "Bay of Bengal",
    poster: "img/12.jpg",
    classname: "Bengali Sadness",
    type: "Bengali",
  },
  {
    id: "13",
    songName: "Ei Obelay",
    songAudio: "audio/13.mp3",
    subtitle: "Shironamhin",
    poster: "img/13.jpg",
    classname: "Bengali Sadness",
    type: "Bengali",
  },
  {
    id: "14",
    songName: "Tu Ne Jo Na Kaha",
    songAudio: "audio/14.mp3",
    subtitle: "New York",
    poster: "img/14.jpg",
    classname: "Hindi Sadness",
    type: "Hindi",
  },
  {
    id: "15",
    songName: "Tu Hi Hain Ashiqui",
    songAudio: "audio/15.mp3",
    subtitle: "Arijit Singh",
    poster: "img/15.jpg",
    classname: "Hindi",
    type: "Hindi",
  },
];

// Filter function
function filterSongs(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".songItem");
  // elements.classList.add(songs.type, "hide");

  elements.forEach((element) => {
    if (value == "All") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

// const btnBox = document.querySelector(".btn-box");
// const songsBox = document.querySelector(".pop_song");
// window.addEventListener("DOMContentLoaded", function () {
//   displayButtons();
//   displaySongs(songs);
// });

// function displayButtons() {
//   const songType = songs.reduce(
//     function (values, obj) {
//       if (!values.includes(obj.type)) {
//         values.push(obj.type);
//       }
//       return values;
//     },
//     ["All"]
//   );

//   const typeBtn = songType
//     .map(function (type) {
//       // return `<button class="type-btn" type="button" data-id=${type}>${type}</button>`;
//       return `<a class="type-btn" type="button" data-id=${type}>${type}</a>`;
//     })
//     .join("");

//   btnBox.innerHTML = typeBtn;
// // const idType=document.getElementsByClassName()
//   const filterBtn = btnBox.querySelectorAll(".type-btn");
//   filterBtn.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//       const type = e.currentTarget.dataset.id;
//       const songlist = songs.filter(function (list) {
//         if (list.type === type) {
//           return list;
//         }
//       });

//       if (type === "all") {
//         displaySongs(songs);
//       } else {
//         displaySongs(songlist);
//       }
//     });
//   });
// }

// function displaySongs(songs) {
//   let showSong = songs.map(function (song) {
//     return `<div class="songItem">
//               <div class="img_play">
//                 <img src="img/${song.id}.jpg" alt="alan" />
//                 <div class='creator'>
//                   <h5><p class="headName">${song.songName}</p>
//                     <br>
//                     <div class="subtitle">${song.subtitle}</div>
//                   </h5>
//                 </div>
//                 <i class="fa-solid fa-circle-play playListPlay" id="${song.id}"></i>
//               </div>
//             </div>`;
//   });
//   showSong = showSong.join("");
//   songsBox.innerHTML = showSong;
// }

Array.from(document.getElementsByClassName("songItem")).forEach(
  (element, i) => {
    // element.className.add(songs[i].className)
    element.getElementsByTagName("img")[0].src = songs[i].poster;
    element.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
    element.getElementsByClassName("subtitle")[0].innerHTML = songs[i].subtitle;
    // element.getElementsByTagName("h5")[0].type = songs.type;
    // element.getElementsByTagName("h5")[0].className = songs[i].classname;
  }
);

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementsByClassName("wave")[0];
masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    wave.classList.add("active2");
  } else {
    music.pause();
    masterPlay.classList.add("fa-circle-play");
    masterPlay.classList.remove("fa-circle-pause");
    wave.classList.remove("active2");
  }
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("playListPlay")).forEach(
    (element) => {
      element.classList.add("fa-circle-play");
      element.classList.remove("fa-circle-pause");
    }
  );
};
// const makeAllBackgrounds = () => {
//   Array.from(document.getElementsByClassName("songItem")).forEach((element) => {
//     element.style.background = "rgb(105, 105, 170, 0)";
//   });
// };

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");
Array.from(document.getElementsByClassName("playListPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      index = e.target.id;
      makeAllPlays();
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      music.src = `audio/${index}.mp3`;
      // music.src = songs.songAudio;
      poster_master_play.src = `img/${index}.jpg`;
      music.play();
      // displaySongs();

      let song_title = songs.filter((ele) => {
        return ele.id == index;
      });
      song_title.forEach((ele) => {
        let { songName } = ele;
        title.innerHTML = songName;
      });
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
      wave.classList.add("active2");
      music.addEventListener("ended", () => {
        masterPlay.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
        wave.classList.remove("active2");
      });
      // makeAllBackgrounds();
      // Array.from(document.getElementsByClassName("songItem"))[
      //   `${index - 1}`
      // ].style.background = "rgb(105, 105, 170, .1)";
    });
  }
);

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  let min = Math.floor(music_dur / 60);
  let sec = Math.floor(music_dur % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  currentEnd.innerText = `${min}:${sec}`;

  let min1 = Math.floor(music_curr / 60);
  let sec1 = Math.floor(music_curr % 60);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentStart.innerText = `${min1}:${sec1}`;

  let progressbar = parseInt((music.currentTime / music.duration) * 100);
  seek.value = progressbar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});
music.addEventListener("ended", () => {
  masterPlay.classList.add("fa-circle-play");
  masterPlay.classList.remove("fa-circle-pause");
  wave.classList.remove("active2");
});

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_dot = document.getElementById("vol_dot");
let vol_bar = document.getElementsByClassName("vol_bar")[0];

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("fa-volume-down");
    vol_icon.classList.add("fa-volume-xmark");
    vol_icon.classList.remove("fa-volume-up");
  }
  if (vol.value > 0) {
    vol_icon.classList.add("fa-volume-down");
    vol_icon.classList.remove("fa-volume-xmark");
    vol_icon.classList.remove("fa-volume-up");
  }
  if (vol.value > 50) {
    vol_icon.classList.remove("fa-volume-down");
    vol_icon.classList.remove("fa-volume-xmark");
    vol_icon.classList.add("fa-volume-up");
  }

  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});

let back = document.getElementById("back");
let next = document.getElementById("next");

back.addEventListener("click", () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("songItem")).length;
  }
  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
  music.play();
  let song_title = songs.filter((ele) => {
    return ele.id == index;
  });

  song_title.forEach((ele) => {
    let { songName } = ele;
    title.innerHTML = songName;
  });
  makeAllPlays();

  document.getElementById(`${index}`).classList.remove("fa-circle-play");
  document.getElementById(`${index}`).classList.add("fa-circle-pause");
  makeAllBackgrounds();
  Array.from(document.getElementsByClassName("songItem"))[
    `${index - 1}`
  ].style.background = "rgb(105, 105, 170, .1)";
});
next.addEventListener("click", () => {
  index -= 0;
  index += 1;
  if (index > Array.from(document.getElementsByClassName("songItem")).length) {
    index = 1;
  }
  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
  music.play();
  let song_title = songs.filter((ele) => {
    return ele.id == index;
  });

  song_title.forEach((ele) => {
    let { songName } = ele;
    title.innerHTML = songName;
  });
  makeAllPlays();

  document.getElementById(`${index}`).classList.remove("fa-circle-play");
  document.getElementById(`${index}`).classList.add("fa-circle-pause");
  makeAllBackgrounds();
  Array.from(document.getElementsByClassName("songItem"))[
    `${index - 1}`
  ].style.background = "rgb(105, 105, 170, .1)";
});


// Search Function //
// --------------------------------//
function myFunction() {
  var input, filter, ul, items, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  items = ul.getElementsByClassName("songItem");
  for (i = 0; i < items.length; i++) {
    a = items[i].getElementsByTagName("h5")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}

// filter buttons
// ------------------

// function filterSongs(value) {
//   let buttons = document.querySelectorAll(".button-value");
//   buttons.forEach((button) => {
//     if (value.toUpperCase() == button.innerText.toUpperCase()) {
//       button.classList.add("active");
//     } else {
//       button.classList.remove("active");
//     }
//   });

//   let elements = document.querySelectorAll(".songItem");
//   elements.forEach((element, i) => {
//     element.classList.add(songs[i].type);
//     if (value == "All") {
//       element.classList.remove("hide");
//     } else {
//       if (element.classList.contains(value)) {
//         element.classList.remove("hide");
//       } else {
//         element.classList.add("hide");
//       }
//     }
//   });
// }
// window.onload = () => {
//   filterProduct("all");
// };

// let favIcon = document.getElementsByClassName("favIcon");
function addToFav(icon) {
    if (icon.classList.contains("fa-regular")) {
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
    } else {
      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");
    }
}
