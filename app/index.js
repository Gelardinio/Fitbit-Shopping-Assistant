/*
 * By Gerald Liu - Fitbit Shopping Assistant
 */
import document from "document";
import * as messaging from "messaging";

let screen1 = document.getElementById("screen1");
let screen2 = document.getElementById("screen2");
let screen3 = document.getElementById("screen3");
let screen4 = document.getElementById("screen4");
let screen5 = document.getElementById("screen5");

const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const button4 = document.getElementById("button-4");
const button5 = document.getElementById("button-5");
const button6 = document.getElementById("button-6");
const button7 = document.getElementById("button-7");
const button8 = document.getElementById("button-8");
let background = document.getElementById("background");

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
  editIL(inputChange) {
    this.inseamLength = inputChange;
  }
  sayGender() {
    return this.gender;
  }
  sayCL() {
    return this.chestLength;
  }
}

let NewUser = new User("Male", 56, 45, 56, 56);

let dictS = {adidasS: [35.5, 31, 36, 38.5, 33.5, 38.5, 42, 37.5, 42], nikeS: [36.25, 36.25, 31.5, 39.25, 39.25, 33.5, 42.5, 42.5, 36.5,], pumaS: [36, 32.5, 37.5, 39.5, 35, 40.5, 42.6, 37.8, 43.5], uaS: [35, 29, 34.5, 39, 32, 37.5, 43, 36, 41], columbiaS: [35, 38.5, 37.5, 37, 30.5, 39.5, 40, 33, 42]};
let dictP = {adidasP: [31, 36, 32.1, 33.5, 38.5, 32.3, 37, 42, 32.5]}; 

messaging.peerSocket.onmessage = evt => {
  console.log(`App received: ${JSON.stringify(evt)}`);
  if (evt.data.key === "color" && evt.data.newValue) {
    let color = JSON.parse(evt.data.newValue);
    console.log(`Setting background color: ${color}`);
    background.style.fill = color;
  }
  if (evt.data.key === "gender" && evt.data.newValue) {
    let gender = JSON.parse(evt.data.newValue).values[0].name;
    NewUser.editGender(gender);
    changeMeasurements(NewUser);
    addTextS(NewUser, dictS);
    addTextP(NewUser, dictP);
  }
  if (evt.data.key === "chest" && evt.data.newValue) {
    let chest = JSON.parse(evt.data.newValue);
    NewUser.editCL(chest);
    changeMeasurements(NewUser);
    addTextS(NewUser, dictS); 
  }
  if (evt.data.key === "waist" && evt.data.newValue) {
    let waist = JSON.parse(evt.data.newValue);
    NewUser.editWL(waist);
    changeMeasurements(NewUser);
    addTextS(NewUser, dictS);
    addTextP(NewUser, dictP);
  }
  if (evt.data.key === "hip" && evt.data.newValue) {
    let hip = JSON.parse(evt.data.newValue);
    NewUser.editHL(hip);
    changeMeasurements(NewUser);
    addTextS(NewUser, dictS); 
    addTextP(NewUser, dictP);
  }
  if (evt.data.key === "inseam" && evt.data.newValue) {
    let inseam = JSON.parse(evt.data.newValue);
    NewUser.editIL(inseam);
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

function changeMeasurements(userName) {
  if (userName.gender == "Male") {
    dictS = {adidasS: [35.5, 31, 36, 38.5, 33.5, 38.5, 42, 37.5, 42], nikeS: [36.25, 36.25, 31.5, 39.25, 39.25, 33.5, 42.5, 42.5, 36.5], pumaS: [36, 32.5, 37.5, 39.5, 35, 40.5, 42.6, 37.8, 43.5], uaS: [35, 29, 34.5, 39, 32, 37.5, 43, 36, 41], columbiaS: [35, 38.5, 37.5, 37, 30.5, 39.5, 40, 33, 42]};
    dictP = {adidasP: [31, 36, 32.1, 33.5, 38.5, 32.3, 37, 42, 32.5], nikeP: [30.5, 36, 32, 33.5, 39, 32.5, 36.5, 42.5, 33], pumaP: [31, 36, 32, 33, 38, 33, 36, 43, 33], uaP: [29, 35, 31, 32.5, 38, 32, 36, 41, 33], columbiaP: [30.5, 36, 30, 33.5, 39, 32, 37.5, 42, 34]};
  } else {
    dictS = {adidasS: [34, 27.6, 37.5, 36.5, 30, 40, 39, 33, 42.5], nikeS: [34, 27.5, 37, 36.5, 30.5, 40, 39.5, 33, 42.5], pumaS: [33.5, 27, 38, 36, 29, 40, 38, 31.5, 42], uaS: [34.5, 26.5, 36.5, 37, 29, 39, 39.5, 31.5, 41.5], columbiaS: [34.5, 28, 37, 37, 30, 39, 40, 32.5, 42]};
    dictP = {adidasP: [27.5, 37, 31, 30, 39.5, 31.5, 32.5, 42, 31.5], nikeP: [27.5, 37, 31, 30, 40, 31.5, 33, 42.5, 31.5], pumaP: [26, 37, 31, 29, 39, 31, 31, 41, 31.5], uaP: [26.5, 36.5, 30.5, 31.5, 39, 31, 31.5, 41.5, 32], columbiaP: [28, 37, 39.5, 39, 39, 32, 33, 42, 34.5]};
  }
}

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

function showScreen5() {
  console.log("Show screen 5");
  screen1.style.display = "none"; 
  screen5.style.display = "inline";
}

function showScreen14() {
  console.log("Show screen 1");
  screen5.style.display = "none";
  screen1.style.display = "inline"; 
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
  showScreen5();
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

button8.addEventListener("click", (evt) => {
  console.log("CLICKED 3");
  showScreen14();
})

function addTextS(nUser, dict) {
  for (let i in dict) {
      let range1 = Math.abs(nUser.chestLength - dict[i][0]) + Math.abs(nUser.waistLength - dict[i][1]) + Math.abs(nUser.hipLength - dict[i][2]);
      let range2 = Math.abs(nUser.chestLength - dict[i][3]) + Math.abs(nUser.waistLength - dict[i][4]) + Math.abs(nUser.hipLength - dict[i][5]);
      let range3 = Math.abs(nUser.chestLength - dict[i][6]) + Math.abs(nUser.waistLength - dict[i][7]) + Math.abs(nUser.hipLength - dict[i][8]);
      for (let k = 0; k < 3; k++) {
        let temps = document.getElementById(i + (k + 1));
        temps.style.fill = "black";
      }
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
      let range1 = Math.abs(nUser.waistLength - dict[i][0]) + Math.abs(nUser.hipLength - dict[i][1]) + Math.abs(nUser.inseamLength  - dict[i][2]);
      let range2 = Math.abs(nUser.waistLength - dict[i][3]) + Math.abs(nUser.hipLength - dict[i][4]) + Math.abs(nUser.inseamLength - dict[i][5]);
      let range3 = Math.abs(nUser.waistLength - dict[i][6]) + Math.abs(nUser.hipLength - dict[i][7]) + Math.abs(nUser.inseamLength - dict[i][8]);
      for (let k = 0; k < 3; k++) {
        let temps = document.getElementById(i + (k + 1));
        temps.style.fill = "black";
      }
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
}

