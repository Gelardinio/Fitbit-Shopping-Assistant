/*
 * Entry point for the watch app
 */
import document from "document";
import * as messaging from "messaging";

let screen1 = document.getElementById("screen1");
let screen2 = document.getElementById("screen2");
let screen3 = document.getElementById("screen3");
let screen4 = document.getElementById("screen4");
let adidas1 = document.getElementById("adidas1");
let adidas2 = document.getElementById("adidas2");
let adidas3 = document.getElementById("adidas3");
let incrementer = 1;
let adidas = document.getElementById("adidas" + incrementer);

const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const button4 = document.getElementById("button-4");
const button5 = document.getElementById("button-5");
const button6 = document.getElementById("button-6");
const button7 = document.getElementById("button-7");
let background = document.getElementById("background");

let shirtLength = 0;
let chestLength = 0;
let waistLength = 0;
let hipLength = 0;

let User = class {
  constructor(gender, chestLength, waistLength, hipLength, inseamLength) {
    this.gender = gender;
    this.chestLength = chestLength;
    this.waistLength = waistLength;
    this.hipLength = hipLength;
    this.inseamLength = inseamLength;
  }
  editGender(inputChange) {
    this.gender = inputChange;
  }
  editCL(inputChange) {
    this.chestLength = inputChange;
  }
  editWL(inputChange) {
    this.waistLength = inputChange;
  }
  editHL(inputChange) {
    this.hipLength = inputChange;
  }
  editIL(intputChange) {
    this.inseamLength = inputChange;
  }
  sayGender() {
    return this.gender;
  }
}

let NewUser = new User("Male", 40, 40, 40, 40);

let dictS = {adidasS: [35.5, 31, 36, 38.5, 33.5, 38.5, 42, 37.5, 42], nikeS: [36.25, 36.25, 31.5, 39.25, 39.25, 33.5, 42.5, 42.5, 36.5,], pumaS: [36, 32.5, 37.5, 39.5, 35, 40.5, 42.6, 37.8, 43.5], uaS: [35, 29, 34.5, 39, 32, 37.5, 43, 36, 41], columbiaS: [35, 38.5, 37.5, 37, 30.5, 39.5, 40, 33, 42]};
let dictP = {adidasP: [31, 36, 32.1, 33.5, 38.5, 32.3, 37, 42, 32.5]}; 

function changeMeasurements(userName) {
  if (userName.gender == "Male") {
    dictS = {adidasS: [35.5, 31, 36, 38.5, 33.5, 38.5, 42, 37.5, 42], nikeS: [36.25, 36.25, 31.5, 39.25, 39.25, 33.5, 42.5, 42.5, 36.5,], pumaS: [36, 32.5, 37.5, 39.5, 35, 40.5, 42.6, 37.8, 43.5], uaS: [35, 29, 34.5, 39, 32, 37.5, 43, 36, 41], columbiaS: [35, 38.5, 37.5, 37, 30.5, 39.5, 40, 33, 42]};
    dictP = {adidasP: [31, 36, 32.1, 33.5, 38.5, 32.3, 37, 42, 32.5]};
  } else {
    dictS = {adidasS: [34.5, 31, 36, 38.5, 33.5, 38.5, 42, 37.5, 42], nikeS: [36.25, 36.25, 31.5, 39.25, 39.25, 33.5, 42.5, 42.5, 36.5,], pumaS: [36, 32.5, 37.5, 39.5, 35, 40.5, 42.6, 37.8, 43.5], uaS: [35, 29, 34.5, 39, 32, 37.5, 43, 36, 41], columbiaS: [35, 38.5, 37.5, 37, 30.5, 39.5, 40, 33, 42]};
    //let AdidasShirt = new ShirtSize(34, 27.6, 37.5, 36.5, 30, 40, 39, 33, 42.5);
    //let AdidasPant = new PantSize(38.5, 38, 30.5, 31.75, 40.5, 31, 34.5, 43.5, 31.5);
  }
}

changeMeasurements(NewUser);

addTextS(NewUser, dictS);
addTextP(NewUser, dictP);

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

function showScreen13() {
  console.log("Show screen 1");
  screen4.style.display = "none";
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

function showScreen4() {
  console.log("Show screen 4");
  screen1.style.display = "none"; 
  screen4.style.display = "inline";
}

button1.addEventListener("click", (evt) => {
  console.log("CLICKED");
  showScreen2();
})

button2.addEventListener("click", (evt) => {
  console.log("CLICKED");
  showScreen3();
})

button3.addEventListener("click", (evt) => {
  console.log("CLICKED");
  showScreen4();
})

button4.addEventListener("click", (evt) => {
  console.log("CLICKED");
  showScreen4();
})

button5.addEventListener("click", (evt) => {
  console.log("CLICKED 2");
  showScreen1();
})

button6.addEventListener("click", (evt) => {
  console.log("CLICKED 3");
  showScreen12();
})

button7.addEventListener("click", (evt) => {
  console.log("CLICKED 3");
  showScreen13();
})

function addTextS(nUser, dict) {
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

function addTextP(nUser, dict) {
  for (let i in dict) {
      console.log(dict[i][0] + "bruh");
      let range1 = Math.abs(nUser.wistLength - dict[i][0]) + Math.abs(nUser.hipLength - dict[i][1]) + Math.abs(nUser.inseamLength  - dict[i][2]);
      let range2 = Math.abs(nUser.wistLength - dict[i][3]) + Math.abs(nUser.hipLength - dict[i][4]) + Math.abs(nUser.inseamLength - dict[i][5]);
      let range3 = Math.abs(nUser.wistLength - dict[i][6]) + Math.abs(nUser.hipLength - dict[i][7]) + Math.abs(nUser.inseamLength - dict[i][8]);
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

messaging.peerSocket.onmessage = evt => {
  console.log(`App received: ${JSON.stringify(evt)}`);
  if (evt.data.key === "color" && evt.data.newValue) {
    let color = JSON.parse(evt.data.newValue);
    console.log(`Setting background color: ${color}`);
    background.style.fill = color;
  }
  if (evt.data.key === "gender" && evt.data.newValue) {
    let gender = JSON.parse(evt.data.newValue).values[0].name;
    console.log(`Changing gender to: ${gender}`);
    NewUser.editGender(gender);
    console.log(NewUser.sayGender());
    changeMeasurements(NewUser);
    addTextS(NewUser, dictS);
    addTextP(NewUser, dictP);
  }
};

messaging.peerSocket.onopen = () => {
  console.log("App Socket Open");
};

messaging.peerSocket.onclose = () => {
  console.log("App Socket Closed");
};