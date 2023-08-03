var span,
  textArr,
  textIndex,
  textToShow,
  textToShowLen,
  letterIndex,
  textTimer,
  letterTimer,
  textDelay,
  letterDelay,
  emptyTimer;

textArr = [
  "Music is the shorthand of emotion . . .",
  "Where words fail, music speaks . . .",
  "it's not in the notes, but in the silence between . . .",
  "Hospital of Mind . . .",
];

span = document.getElementsByTagName("span")[0];
textIndex = 0;
textDelay = 2300;
letterDelay = 50;

function showText() {
  textToShow = textArr[textIndex];
  textToShowLen = textToShow.length;
  letterIndex = 0;

  letterTimer = setInterval(function () {
    span.textContent += textToShow[letterIndex];
    // console.log(textToShow[letterIndex]);
    letterIndex++;
    if (letterIndex > textToShowLen - 1) {
      clearInterval(letterTimer);
      textTimer = setTimeout(nextText, textDelay);
    }
  }, letterDelay);
}

function nextText() {
  clearTimeout(textTimer);
  textIndex++;
  if (textIndex > textArr.length - 1) {
    textIndex = 0;
  }
  emptySpan();
}

function emptySpan() {
  emptyTimer = setInterval(removeLetter, letterDelay / 2);
}

function removeLetter() {
  if (span.textContent.length != 0) {
    popedSpan = Array.prototype.slice
      .call(span.textContent)
      .slice(0, span.textContent.length - 1)
      .join("");
    span.textContent = popedSpan;
  } else {
    clearInterval(emptyTimer);
    showText();
  }
}

emptySpan();



// home image changing
let image = document.getElementById('homeImg');
let images = [
  "userImage/m1.jpg",
  "userImage/m2.jpg",
  "userImage/m3.jpg",
  "userImage/m4.jpg",
  "userImage/m5.jpg",
  "userImage/m6.jpg",
//   "userImage/m7.jpg",
  "userImage/m8.jpg",
  "userImage/m9.jpg"
];
setInterval(function () {
    let random = Math.floor(Math.random() * 7);
    image.src = images[random];
}, 3000);

