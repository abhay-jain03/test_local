import React from "react";
import RoutingComponent from "./Routing";
import "./App.css";
import Test2 from "./Components/test2/Test2";

// const btn1 = document.querySelector("btn");
// btn1.addEventListener("click", e => {
//   console.log(e);
// });

//Class
class There {
  constructor(firstName, lastName, dob, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.location = location;
  }
  getBirthDay() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getDob() {
    return `${this.dob}`;
  }
}
const There1 = new There("Johy", "Doe", "12-12-2012", "Agra");
const There2 = new There("Hi", "Johy", "1-31-1990", "Gurgaon");
console.log(There1);
console.log(There2.location);

// function addNums(num1 = 8, num2 = 5) {
//   return num1 + num2;
// }
// console.log(addNums());

const addNums = (num1 = 8, num2 = 5) => {
  return num1 + num2;
};
console.log(addNums(1, 20));

function Where(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  // this.getBirthDay = function() {
  //   return this.dob.getFullYear();
  // };
  // this.getFullName = function() {
  //   return `${this.firstName} ${this.lastName}`;
  // };
}
const where1 = new Where("John", "Doe", "23-12-1998");
const where2 = new Where("Hey", "John", "11-3-1998");
console.log(where2.dob);
// console.log(where2.getBirthDay());
// console.log(where2.getFullName());
Where.prototype.getBirthDay = function() {
  return this.dob.getFullYear();
};
Where.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
console.log(where2);

function App() {
  const score = 11;

  const name = "john";
  const age = 34;
  const isCool = true;
  const rating = 4.5;
  const x = null;
  const y = undefined;
  let z;

  console.log(typeof name);
  console.log(typeof age);
  console.log(typeof isCool);
  console.log(typeof rating);
  console.log(typeof x);
  console.log(typeof y);
  console.log(typeof z);

  console.log("My name is " + name + " and I am " + age + " years old");
  const hello = `My name is ${name} and i am ${age} years old ${rating}`;
  console.log(hello);

  console.log(score);

  const s = "hello world";
  console.log(s.substring[0]);

  const person = {
    firstName: "john",
    lastName: "doe",
    age: "21",
    hobbies: ["music", "cricket"],
    address: {
      street: "knvf",
      location: "gurgaon"
    },
    city: "agra"
  };
  console.log(person.hobbies[1]);

  const food = [
    {
      id: 1,
      text: "Delete trash",
      isCompleted: true
    },
    {
      id: 2,
      text: "undo trash",
      isCompleted: false
    },
    {
      id: 3,
      text: "Redo trash",
      isCompleted: true
    }
  ];

  console.log(food[1].isCompleted);

  const foodJSON = JSON.stringify(food);
  console.log(foodJSON);
  // const foodJSON = JSON.parse(food);
  // console.log(foodJSON);

  for (let i = 0; i < 10; i++) {
    // console.log(i);
    console.log(`for loop number: ${i}`);
  }

  let j = 0;
  while (j < 10) {
    console.log(`while loop number: ${j}`);
    j++;
  }

  for (let i = 0; i < food.length; i++) {
    // console.log(i);
    console.log(food[i].text);
  }

  // for (let abc of food) {
  //   console.log(food.id);
  // }

  const k = 101;
  if (k === 10) {
    console.log("k is 10");
  } else if (k > 10) {
    console.log("Hey");
  } else {
    console.log("k is different");
  }

  const p = 12;
  const color = p > 10 ? "red" : "blue";
  //console.log(color);
  // const color = "green";

  switch (color) {
    case "red":
      console.log("color is red");
      break;
    case "blue":
      console.log("color is blue");
      break;
    default:
      console.log("Color is not red or blue");
      break;
  }

  return (
    <div className="App">
      <RoutingComponent />
    </div>
  );
}

export default App;
