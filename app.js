"use strict";

function parseToJSON(data) {

  try {
    return JSON.parse(data);
  } catch(err) {
    console.error(err);
    return null;
  }
}

let failData = "<h1>Hello World!</h1>"

let passData = JSON.stringify({ success: true });

console.log(parseToJSON(failData)); //null

console.log(parseToJSON(passData)); // { success: true }
 