/*
 * Entry point for the watch app
 */
import document from "document";

let screen1 = document.getElementById("screen1");
let screen2 = document.getElementById("screen2");
let screen3 = document.getElementById("screen3");
let list = document.getElementById("myList");
let items = list.getElementsByClassName("list-item");
let adidas = document.getElementById("adidas");

const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button4 = document.getElementById("button-4");
const button5 = document.getElementById("button-5");

let demotext = document.getElementById("demotext");
demotext.x = 168;
demotext.y = 50;
demotext.text = "";

let shirtLength = 0;
let chestLength = 0;
let waistLength = 0;
let hipLength = 0;

let User = class {
  constructor(shirtLength, chestLength, waistLength, hipLength) {
    this.shirtLength = shirtLength;
    this.chestLength = chestLength;
    this.waistLength = waistLength;
    this.hipLength = hipLength;
  }
}

let ShirtSize = class {
  constructor(length1, chest1, waist1, hip1, length2, chest2, waist2, hip2, length3, chest3, waist3, hip3) {
    this.length1 = length1;
    this.chest1 = chest1;
    this.waist1 = waist1;
    this.hip1 = hip1; 
    this.length2 = length2;
    this.chest2 = chest2;
    this.waist2 = waist2;
    this.hip2 = hip2;
    this.length3 = length3;
    this.chest3 = chest3;
    this.waist3 = waist3;
    this.hip3 = hip3;    
  }
}

let NewUser = new User(40, 40, 40, 40);
shirtLength = NewUser.shirtLength;
chestLength = NewUser.chestLength;
waistLength = NewUser.waistLength;
hipLength = NewUser.hipLength; 

turnGreen();

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

button5.addEventListener("click", (evt) => {
  console.log("CLICKED 2");
  showScreen1();
})

function turnGreen() {
  adidas.style.fill = "green";
  console.log("turn green");
}