import React from "react";
import { Link } from "react-router-dom";
import "./Test1.css";

function Test1() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      // var myObj = JSON.stringify(xmlhttp.response);
      var myObj = JSON.parse(xmlhttp.responseText);
      // myObj = JSON.parse(xmlhttp.response);
      document.getElementById("demo").innerHTML = myObj.address;
    }
  };
  xmlhttp.open("GET", "Test1.json", true);
  xmlhttp.send();

  return (
    <div className="App">
      <p id="person">Hello</p>
      <Link to="/Test2">
        <h1>Abhay</h1>
      </Link>
      <Link to="/">
        <h1>Jain</h1>
      </Link>
    </div>
  );
}

export default Test1;
