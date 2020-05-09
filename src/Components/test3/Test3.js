import React from "react";
import Test5 from "../test5/Test5";
import jimper from "../test4/Data";

var a;
function myFunction() {
  a = document.getElementById("demo").innerHTML = document.getElementById(
    "myText"
  ).value;
}

function apk() {
  for (let i = 0; i < a; i++) {
    document.createElement("p");
  }
}

function Test3(props) {
  const firstName = "Bob";
  const lastName = "ziroll";
  const date = new Date();

  let timeOfDay, hours;
  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return (
    <div className="App">
      <div>
        <h1>Hello {firstName + " " + lastName} </h1>
        <h3>Hello {`${firstName} ${lastName}`} </h3>
        <h5>{timeOfDay}</h5>
        <h1>
          It is currently about{" "}
          {date.getHours() + " " + date.getMinutes() + " " + date.getSeconds()}{" "}
          o'clock!
        </h1>
      </div>
      <div style={{ marginTop: "2rem", marginLeft: "2rem" }}>
        <input type="text" id="myText"></input>
        <p id="demo" onClick={() => apk()}></p>
        <button onClick={() => myFunction()}>Try it</button>
      </div>
      <div>
        <Test5
          name="Mr. Whiskerson"
          imgUrl="http://placekitten.com/300/200"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Test5
          name="Fluffykins"
          imgUrl="http://placekitten.com/400/200"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
        <Test5
          name="Felix"
          imgUrl="http://placekitten.com/200/100"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
        />
      </div>
      <div>
        <h3>Question: {props.question}</h3>
        <h3>Answer: {props.punchLine}</h3>
        <hr />
      </div>
    </div>
  );
}

export default Test3;
