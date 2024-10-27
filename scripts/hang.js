var hangclass = document.querySelector(".hang");

var headiv = document.createElement("div");
var bodydiv = document.createElement("div");
var lefthand = document.createElement("div");
var righthand = document.createElement("div");
var leftleg = document.createElement("div");
var rightleg = document.createElement("div");

function placehead() {
  headiv.innerHTML = "<img src=\"./assets/head.svg\" class=\"head\">";
  hangclass.appendChild(headiv);
}

function placebody() {
  bodydiv.innerHTML = "<img src=\"./assets/body.svg\" class=\"body\">";
  hangclass.appendChild(bodydiv);
}

function placelefthand() {
  lefthand.innerHTML = "<img src=\"./assets/left-hand.svg\" class=\"left-hand\">";
  hangclass.appendChild(lefthand);
}

function placerighthand() {
  righthand.innerHTML = "<img src=\"./assets/right-hand.svg\" class=\"right-hand\">";
  hangclass.appendChild(righthand);
}

function placeleftleg() {
  leftleg.innerHTML = "<img src=\"./assets/left-leg.svg\" class=\"left-leg\">";
  hangclass.appendChild(leftleg);
}

function placerightleg() {
  rightleg.innerHTML = "<img src=\"./assets/right-leg.svg\" class=\"right-leg\">";
  hangclass.appendChild(rightleg);
}
