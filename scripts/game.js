var word;

async function getword() {
  await fetch("./assets/wordlist.txt")
    .then((response) => response.text())
    .then((text) => {
      var lines = text.split("\n");
      word = lines[Math.floor(Math.random() * lines.length)].trim();
    });
  console.log(word);
}

var answersec = document.querySelector(".answer-section");

answersec.style.gap = "15px";

var ansdiv = [];

function creatediv(letter) {
  var div = document.createElement("div");
  div.style.border = "none";
  div.style.borderBottom = "5px solid black";
  div.style.width = "5%";
  div.style.height = "30%"
  div.style.textAlign = "center";
  div.classList.add(letter);
  ansdiv.push(div);
  return div;
}

async function game() {
  await getword();
  for (var i = 0; i < word.length; i++) {
    answersec.appendChild(creatediv(word[i]));
  }
}

function placenextpart(hp) {
  if (hp <= 6) placehead();
  if (hp <= 5) placebody();
  if (hp <= 4) placerighthand();
  if (hp <= 3) placelefthand();
  if (hp <= 2) placerightleg();
  if (hp <= 1) placeleftleg();
  if (health <= 1) {
    alert("game over");
    location.reload();
  }
}

function isinword(word, letter) {
  console.log("searching for:" + letter);
  for (var i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === letter.toUpperCase()) return true;
  }
  return false;
}

game();
var health = 7;
var lettersfound = 0;
var letters = document.querySelectorAll(".letter");
letters.forEach(function (div) {
  div.addEventListener("click", function () {
    if (isinword(word, div.textContent.toUpperCase())) {
      for (var i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() === div.textContent.toUpperCase()) {
          ansdiv[i].textContent = word[i].toUpperCase();
          lettersfound += 1;
        }
      }
    } else health -= 1;
    placenextpart(health);
    if (lettersfound === word.length) {
      alert("You Win!");
      location.reload();
    }
  });
});
