/* eslint-disable no-native-reassign */
/* eslint-disable no-unused-vars */
import React from "react";

let abc = document.getElementById("myBtn");
let def = document.getElementById("content");

function getData() {
  // URL = "http://dummy.restapiexample.com/api/v1/employees";
  URL = "ab.txt";
  fetch(URL)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      //   console.log(data);
      //   document.write(data);
      let ac = data;
      alert(ac);
    });
}

getData();

function Fetch() {
  return (
    <>
      <button>Fetch Data</button>
      <button id="myBtn">Your button</button>
      <div id="content"></div>
    </>
  );
}

export default Fetch;
