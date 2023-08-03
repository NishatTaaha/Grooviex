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

const music = new Audio("audio/26.mp3");
// SideMenu Song Code
// -----------------------
const songs = [
  {
    id: "1",
    songName: "Title 101",
    songAudio: "audio/1.mp3",
    subtitle: "Raihan Rahee",
    poster: "img/1.jpg",
    classname: "Bengali",
    type: "Bengali",
  },
  {
    id: "2",
    songName: "Show Me the Meaning",
    songAudio: "audio/2.mp3",
    subtitle: "Backstreet Boys",
    poster: "img/2.jpg",
    classname: "Guitar Love",
    type: "Guitar",
  },
  // all object type
  {
    id: "3",
    songName: "Tomar Jonno",
    songAudio: "audio/3.mp3",
    subtitle: "Arnab",
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
    songName: "C'est la vie",
    songAudio: "audio/5.mp3",
    subtitle: "Khaled",
    poster: "img/5.jpg",
    classname: "English",
    type: "English",
  },
  {
    id: "6",
    songName: "Wavin' Flag",
    songAudio: "audio/6.mp3",
    subtitle: "K'naan",
    poster: "img/6.jpg",
    classname: "English",
    type: "English",
  },
  {
    id: "7",
    songName: "Believer",
    songAudio: "audio/7.mp3",
    subtitle: "Imagine Dragons",
    poster: "img/7.jpg",
    classname: "English",
    type: "English",
  },
  {
    id: "8",
    songName: "Pasoori",
    songAudio: "audio/8.mp3",
    subtitle: "Coke Studio Pakistan",
    poster: "img/8.jpg",
    classname: "Hindi",
    type: "Hindi",
  },
  {
    id: "9",
    songName: "Dishehara Tui",
    songAudio: "audio/9.mp3",
    subtitle: "Mashuque",
    poster: "img/9.jpg",
    classname: "Bengali",
    type: "Bengali",
  },
  {
    id: "10",
    songName: "Galiyaan",
    songAudio: "audio/10.mp3",
    subtitle: "Ankit",
    poster: "img/10.jpg",
    classname: "Hindi",
    type: "Hindi",
  },
  {
    id: "11",
    songName: "Kotha Koio Na",
    songAudio: "audio/11.mp3",
    subtitle: "Coke Studio Bangla",
    poster: "img/11.jpg",
    classname: "Bengali",
    type: "Bengali",
  },
  {
    id: "12",
    songName: "Night Changes",
    songAudio: "audio/12.mp3",
    subtitle: "One Direction",
    poster: "img/12.jpg",
    classname: "English",
    type: "English",
  },
  {
    id: "13",
    songName: "Until I Found You",
    songAudio: "audio/13.mp3",
    subtitle: "Stephen Sanchez",
    poster: "img/13.jpg",
    classname: "English",
    type: "English",
  },
  {
    id: "14",
    songName: "Abar Hashimukh",
    songAudio: "audio/14.mp3",
    subtitle: "Shironamhin",
    poster: "img/14.jpg",
    classname: "Bengali",
    type: "Bengali",
  },
  {
    id: "15",
    songName: "Ekta Chele",
    songAudio: "audio/15.mp3",
    subtitle: "Shahana",
    poster: "img/15.jpg",
    classname: "Bengali",
    type: "Bengali",
  },

  {
    id: "16",
    songName: "Govire Jaw",
    songAudio: "audio/16.mp3",
    subtitle: "Anupam",
    poster: "img/16.jpg",
    classname: "Bengali Love",
    type: "Bengali",
  },
  {
    id: "17",
    songName: "Tum Hi Ho",
    songAudio: "audio/17.mp3",
    subtitle: "Arijit Singh",
    poster: "img/17.jpg",
    classname: "Hindi Love",
    type: "Hindi",
  },
  {
    id: "18",
    // songAudio:
    songName: "Bondhu Vabo ki",
    songAudio: "audio/18.mp3",
    subtitle: "Topu",
    poster: "img/18.jpg",
    classname: "Bengali Love",
    type: "Bengali",
  },
  {
    id: "19",
    songName: "Magnificent Century",
    songAudio: "audio/19.mp3",
    subtitle: "Magnificent Century",
    poster: "img/19.jpg",
    classname: "Violin",
    type: "Violin",
  },
  {
    id: "20",
    songName: "Murir Tin",
    songAudio: "audio/20.mp3",
    subtitle: "Coke Studio",
    poster: "img/20.jpg",
    classname: "Bengali Happiness",
    type: "Bengali",
  },

  {
    id: "22",
    songName: "Neela",
    songAudio: "audio/22.mp3",
    subtitle: "Noble",
    poster: "img/22.jpg",
    classname: "Bengali Love",
    type: "Bengali",
  },
  {
    id: "23",
    songName: "Opare",
    songAudio: "audio/23.mp3",
    subtitle: "Bay of Bengal",
    poster: "img/23.jpg",
    classname: "Bengali Sadness",
    type: "Bengali",
  },
  {
    id: "24",
    songName: "Tu Hi Hain Ashiqui",
    songAudio: "audio/24.mp3",
    subtitle: "Arijit Singh",
    poster: "img/24.jpg",
    classname: "Hindi",
    type: "Hindi",
  },
  {
    id: "25",
    songName: "Ek Paye Nupur",
    songAudio: "audio/25.mp3",
    subtitle: "Topu",
    poster: "img/25.jpg",
    classname: "Bengali",
    type: "Bengali",
  },
];

// Filter function
// -------------------
function filterSongs(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // Select all cards
  let elements = document.querySelectorAll(".songItem");

  elements.forEach((element) => {
    let songType = element.dataset.type; // Get the song type from the dataset attribute
    element.classList.add("hide");

    if (value == "All" || value == songType) {
      element.classList.remove("hide");
    }
  });
}

// masterPlay on off
// ----------------------
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

// Get the container element for music cards
const myUL = document.getElementById("myUL");

// Generate the music cards dynamically
songs.forEach((song, index) => {
  const songItem = document.createElement("div");
  songItem.classList.add("songItem");
  songItem.dataset.type = song.type; // Add the data-type attribute
  myUL.appendChild(songItem);

  const heartIcon = document.createElement("div");
  heartIcon.classList.add("heartIcon");
  songItem.appendChild(heartIcon);

  const favIcon = document.createElement("i");
  favIcon.classList.add("fa-regular", "fa-heart", "favIcon");
  heartIcon.appendChild(favIcon);

  const img_play = document.createElement("div");
  img_play.classList.add("img_play");
  songItem.appendChild(img_play);

  const img = document.createElement("img");
  img.src = song.poster;
  img_play.appendChild(img);

  const creator = document.createElement("div");
  creator.classList.add("creator");
  img_play.appendChild(creator);

  const h5 = document.createElement("h5");
  h5.textContent = song.songName;
  creator.appendChild(h5);

  const subtitle = document.createElement("div");
  subtitle.classList.add("subtitle");
  subtitle.textContent = song.subtitle;
  creator.appendChild(subtitle);

  // const playListPlay = document.createElement("i");
  // playListPlay.classList.add("fa-solid", "fa-circle-play", "playListPlay");
  // songItem.appendChild(playListPlay);

  const audioPlayer = document.createElement("audio");
  audioPlayer.classList.add("audio-player");
  audioPlayer.src = song.songAudio;
  img_play.appendChild(audioPlayer);
  audioPlayer.dataset.index = index;

  const playListPlay = document.createElement("div");
  playListPlay.innerHTML =
    '<i class="fa-solid fa-circle-play playListPlay"></i>';
  playListPlay.classList.add("playListPlay");
  img_play.appendChild(playListPlay);
  // songItem.appendChild(songItem);
  playListPlay.dataset.index = index;

  playListPlay.addEventListener("click", (event) => {
    const clickedIndex = event.target.parentNode.dataset.index; // Get the index of the clicked play button
    const audioPlayers = document.querySelectorAll(".audio-player");
    const playButtons = document.querySelectorAll(".playListPlay i");

    audioPlayers.forEach((player, i) => {
      const playButton = playButtons[i];
      if (i.toString() === clickedIndex) {
        if (player.paused) {
          player.play();
          playButton.classList.remove("fa-circle-play");
          playButton.classList.add("fa-circle-pause");
          masterPlay.classList.remove("fa-circle-play");
          masterPlay.classList.add("fa-circle-pause");
          wave.classList.add("active2");
          document.getElementById("title").textContent = songs[i].songName;
          document.getElementById("poster_master_play").src = songs[i].poster;
          document.getElementById("title").style.display = "block";
          document.getElementById("poster_master_play").style.display = "block";
        } else {
          player.pause();
          playButton.classList.remove("fa-circle-pause");
          playButton.classList.add("fa-circle-play");
          masterPlay.classList.remove("fa-circle-pause");
          masterPlay.classList.add("fa-circle-play");
          wave.classList.remove("active2");

          // document.getElementById("title").style.display = "none";
          // document.getElementById("poster_master_play").style.display = "none";
        }
      } else {
        player.pause();
        playButton.classList.remove("fa-circle-pause");
        playButton.classList.add("fa-circle-play");
      }
    });
    const currentStart = document.getElementById("currentStart");
    const currentEnd = document.getElementById("currentEnd");
    const clickedAudioPlayer = audioPlayers[clickedIndex];
    const seek = document.getElementById("seek");
    const bar2 = document.getElementById("bar2");
    const dot = document.getElementsByClassName("dot")[0];

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

    clickedAudioPlayer.addEventListener("timeupdate", () => {
      const currentTime = clickedAudioPlayer.currentTime;
      const duration = clickedAudioPlayer.duration;
      const progress = (currentTime / duration) * 100;
      seek.value = progress;
      bar2.style.width = `${progress}%`;
      dot.style.left = `${progress}%`;
    });
  });
});

// back and next
// ------------------
let index = 0;
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

// volume management
// ----------------------
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

// search function
// --------------------
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

// footer code javascript
// ------------------------------
const footer = document.createElement("footer");
footer.classList.add("footer-distributed");

const footerLeft = document.createElement("div");
footerLeft.classList.add("footer-left");

footerLeft.innerHTML = `
    <h3 class="name"><span><i class="fa-brands fa-slack"></i></span>Grooviex</h3>
    <p class="footer-links">
        <a href="#" class="link-1">Home</a>
        <a href="#">Blog</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
        <a href="#">Faq</a>
        <a href="#">Contact</a>
    </p>
    <p class="footer-company-name">Company Name © ${new Date().getFullYear()}</p>
`;

const footerCenter = document.createElement("div");
footerCenter.classList.add("footer-center");

footerCenter.innerHTML = `
    <div>
        <i class="fa fa-map-marker"></i>
        <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
    </div>
    <div>
        <i class="fa fa-phone"></i>
        <p>+1.555.555.5555</p>
    </div>
    <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:support@company.com">support@company.com</a></p>
    </div>
`;

const footerRight = document.createElement("div");
footerRight.classList.add("footer-right");

footerRight.innerHTML = `
    <p class="footer-company-about">
        <span>About the company</span>
        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
    </p>
    <div class="footer-icons">
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-github"></i></a>
    </div>
`;

footer.appendChild(footerLeft);
footer.appendChild(footerCenter);
footer.appendChild(footerRight);

myUL.appendChild(footer);

// add to favourite
// heart

const heartIcons = document.querySelectorAll(".heartIcon");
const favDiv = document.querySelector(".favdiv");

heartIcons.forEach((heartIcon) => {
  heartIcon.addEventListener("click", () => {
    const favIcon = heartIcon.querySelector(".favIcon");
    favIcon.classList.toggle("fas"); // Toggle the "fas" class to switch between outlined and solid heart icons
    favIcon.classList.toggle("far");

    const songItem = heartIcon.parentNode;
    const img = songItem.querySelector("img");
    const h5 = songItem.querySelector("h5");
    const subtitle = songItem.querySelector(".subtitle");

    // Create a new card
    if (favIcon.classList.contains("fas")) {
      const card = document.createElement("li");
      card.classList.add("songItem");
      card.innerHTML = `
        <img src="${img.src}" alt="">
        <h5>
          ${h5.textContent}
          <div class="subtitle">${subtitle.textContent}</div>
        </h5>
        <i class="fa-solid fa-circle-play" id="6"></i>
      `;
      favDiv.appendChild(card);
    } else {
      // Remove the last added card
      const cards = favDiv.querySelectorAll(".songItem");
      if (cards.length > 0) {
        const lastCard = cards[cards.length - 1];
        lastCard.remove();
      }
    }
  });
});

favDiv.addEventListener("click", (event) => {
  const playButton = event.target;
  if (!playButton.classList.contains("fa-circle-play")) {
    return; // Only handle the click if the button is in the play state
  }

  const cards = favDiv.querySelectorAll(".songItem");
  cards.forEach((card) => {
    const playButton = card.querySelector(".fa-circle-play");
    if (playButton === event.target) {
      playButton.classList.remove("fa-circle-play");
      playButton.classList.add("fa-circle-pause");
    } else {
      playButton.classList.remove("fa-circle-pause");
      playButton.classList.add("fa-circle-play");
    }
  });
});
