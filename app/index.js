/*
 * Entry point for the watch app
 */
import document from "document";

let screen1 = document.getElementById("screen1");
let screen2 = document.getElementById("screen2");
let screen3 = document.getElementById("screen3");
let adidas1 = document.getElementById("adidas1");
let adidas2 = document.getElementById("adidas2");
let adidas3 = document.getElementById("adidas3");
let incrementer = 1;
let adidas = document.getElementById("adidas" + incrementer);

const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-2");
const button4 = document.getElementById("button-4");
const button5 = document.getElementById("button-5");
const button6 = document.getElementById("button-6");

let shirtLength = 0;
let chestLength = 0;
let waistLength = 0;
let hipLength = 0;

let User = class {
  constructor(gender, chestLength, waistLength, hipLength) {
    this.gender = gender;
    this.chestLength = chestLength;
    this.waistLength = waistLength;
    this.hipLength = hipLength;
  }
}

let NewUser = new User("m", 40, 40, 40);

console.log(NewUser[2]);

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
  bestFit(nUser) {
    let range1 = Math.abs(nUser.chestLength - this.chest1) + Math.abs(nUser.waistLength - this.waist1) + Math.abs(nUser.hipLength - this.hip1);
    let range2 = Math.abs(nUser.chestLength - this.chest2) + Math.abs(nUser.waistLength - this.waist2) + Math.abs(nUser.hipLength - this.hip2);
    let range3 = Math.abs(nUser.chestLength - this.chest3) + Math.abs(nUser.waistLength - this.waist3) + Math.abs(nUser.hipLength - this.hip3);
    if (range1 < range2 && range1 < range3) {
      return "adidas1";
    } else if (range2 < range1 && range2 < range3) {
      return "adidas2";
    } else {
      return "adidas3";
    }
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

if (NewUser.gender == "m") {
  let AdidasShirt = new ShirtSize(35.5, 31, 36, 38.5, 33.5, 38.5, 42, 37.5, 42);
  let AdidasPant = new PantSize(31, 36, 32.1, 33.5, 38.5, 32.3, 37, 42, 32.5);
  let NikeShirt = new ShirtSize(36.25, 31.5, 36.25, 39.25, 33.5, 39.25, 42.5, 36.5, 42.5);
  let dicts = {adidasS: [35.5, 31, 36, 38.5, 33.5, 38.5, 42, 37.5, 42], nikeS: [36.25, 36.25, 31.5, 39.25, 39.25, 33.5, 42.5, 42.5, 36.5,], pumaS: [36, 32.5, 37.5, 39.5, 35, 40.5, 42.6, 37.8, 43.5], uaS: [35, 29, 34.5, 39, 32, 37.5, 43, 36, 41], columbiaS: [35, 38.5, 37.5, 37, 30.5, 39.5, 40, 33, 42]};
} else {
  let AdidasShirt = new ShirtSize(34, 27.6, 37.5, 36.5, 30, 40, 39, 33, 42.5);
  let AdidasPant = new PantSize(38.5, 38, 30.5, 31.75, 40.5, 31, 34.5, 43.5, 31.5);
}

addText(NewUser, dicts);

function showScreen1() {
  console.log("Show screen 1");
  screen2.style.display = "none";
  screen1.style.display = "inline"; 
}

function showScreen12() {
  console.log("Show screen 1");
  screen3.style.display = "none";
  screen1.style.display = "inline"; 
}

function showScreen2() {
  console.log("Show screen 2");
  screen1.style.display = "none"; 
  screen2.style.display = "inline";
}

function showScreen3() {
  console.log("Show screen 3");
  screen1.style.display = "none"; 
  screen3.style.display = "inline";
}

button1.addEventListener("click", (evt) => {
  console.log("CLICKED");
  showScreen2();
})

button3.addEventListener("click", (evt) => {
  console.log("CLICKED");
  showScreen3();
})

button5.addEventListener("click", (evt) => {
  console.log("CLICKED 2");
  showScreen1();
})

button6.addEventListener("click", (evt) => {
  console.log("CLICKED 3");
  showScreen12();
})


function addText(nUser, dict) {
  for (let i in dict) {
      console.log(dict[i][0] + "bruh");
      let range1 = Math.abs(nUser.chestLength - dict[i][0]) + Math.abs(nUser.waistLength - dict[i][1]) + Math.abs(nUser.hipLength - dict[i][2]);
      let range2 = Math.abs(nUser.chestLength - dict[i][3]) + Math.abs(nUser.waistLength - dict[i][4]) + Math.abs(nUser.hipLength - dict[i][5]);
      let range3 = Math.abs(nUser.chestLength - dict[i][6]) + Math.abs(nUser.waistLength - dict[i][7]) + Math.abs(nUser.hipLength - dict[i][8]);
      if (range1 < range2 && range1 < range3) {
        let temp = document.getElementById(i + "1");
        turnGreen(temp);
      } else if (range2 < range1 && range2 < range3) {
        let temp = document.getElementById(i + "2");
        turnGreen(temp);
      } else {
        let temp = document.getElementById(i + "3");
        turnGreen(temp);
      }
      let tempText = document.getElementById(i + "1");
      tempText.text = "Small " + dict[i][0] + " " + dict[i][1] + " " + dict[i][2];
      let tempText = document.getElementById(i + "2")
      tempText.text = "Medium " + dict[i][3] + " " + dict[i][4] + " " + dict[i][5];
      let tempText = document.getElementById(i + "3")
      tempText.text = "Large " + dict[i][6] + " " + dict[i][7] + " " + dict[i][8];
  }
}

function turnGreen(toFill) {
  toFill.style.fill = "green";
  console.log("turn green");
}