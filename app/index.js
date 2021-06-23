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
  constructor(gender, shirtLength, chestLength, waistLength, hipLength) {
    this.gender = gender;
    this.shirtLength = shirtLength;
    this.chestLength = chestLength;
    this.waistLength = waistLength;
    this.hipLength = hipLength;
  }
}

let ShirtSize = class {
  constructor(chest1, waist1, hip1, chest2, waist2, hip2, chest3, waist3, hip3) {
    this.chest1 = chest1;
    this.waist1 = waist1;
    this.hip1 = hip1; 
    this.chest2 = chest2;
    this.waist2 = waist2;
    this.hip2 = hip2;
    this.chest3 = chest3;
    this.waist3 = waist3;
    this.hip3 = hip3;    
  }
}

let PantSize = class {
  constructor(waist1, hip1, inseam1, waist2, hip2, inseam2, waist3, hip3, inseam3) {
      this.waist1 = waist1;
      this.hip1 = hip1;
      this.inseam1 = inseam1;
      this.waist2 = waist2;
      this.hip2 = hip2;
      this.inseam2 = inseam2;
      this.waist3 = waist3;
      this.hip3 = hip3;
      this.inseam3 = inseam3;      
  }
}

let NewUser = new User("m", 40, 40, 40, 40);

if (NewUser.gender == "m") {
  let AdidasShirt = new ShirtSize(35.5, 31, 36, 38.5, 33.5, 38.5, 42, 37.5, 42);
  let AdidasPant = new PantSize(31, 36, 32.1, 33.5, 38.5, 32.3, 37, 42, 32.5);
  let NikeShirt = new ShirtSize(36.25, 31.5, 36.25, 39.25, 33.5, 39.25, 42.5, 36.5, 42.5);
} else {
  let AdidasShirt = new ShirtSize(34, 27.6, 37.5, 36.5, 30, 40, 39, 33, 42.5);
  let AdidasPant = new PantSize(38.5, 38, 30.5, 31.75, 40.5, 31, 34.5, 43.5, 31.5);
}

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