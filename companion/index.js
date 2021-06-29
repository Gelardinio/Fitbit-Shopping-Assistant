import * as messaging from "messaging";
import { settingsStorage } from "settings";

messaging.peerSocket.onopen = () => {
  console.log("Companion Socket Open");
  restoreSettings();
};

messaging.peerSocket.onclose = () => {
  console.log("Companion Socket Closed");
};

settingsStorage.onchange = evt => {
  let data = {
    key: evt.key,
    newValue: evt.newValue
  };
  console.log("This is data: " + evt.newValue);
  sendVal(data);
};


function restoreSettings() {
  for (let index = 0; index < settingsStorage.length; index++) {
    let key = settingsStorage.key(index);
    if (key) {
      let data = {
        key: key,
        newValue: settingsStorage.getItem(key)
      };
      sendVal(data);
    }
  }
}

function sendVal(data) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  }
}
