/*
 * Entry point for the watch app
 */
import document from "document";

let screen1 = document.getElementById("screen1");
let screen2 = document.getElementById("screen2");
let screen3 = document.getElementById("screen3");

const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button4 = document.getElementById("button-4");

let demotext = document.getElementById("demotext");
demotext.x = 168;
demotext.y = 50;
demotext.text = "";

function showScreen1() {
  console.log("Show screen 1");
  screen1.style.display = "inline"; 
  screen2.style.display = "none";
}

function showScreen2() {
  console.log("Show screen 2");
  screen1.style.display = "none"; 
  screen2.style.display = "inline";
}

button1.addEventListener("click", (evt) => {
  console.log("CLICKED");
  showScreen2();
})

button4.addEventListener("click", (evt) => {
  console.log("CLICKED 2");
  showScreen1();
})