import React from "react";

// var btn;
// var t;
// function myFun() {
//   var x = document.createElement("INPUT");
//   x.setAttribute("type", "file");
//   x.setAttribute("id", "file");
//   document.body.appendChild(x);
//   x.onchange = function() {
//     hello();
//   };
//   btn.appendChild(t);
//   document.body.appendChild(btn);
// }
// function hello() {
//   alert("hello!");
// }

var element;
var j;
function inp() {
  //   element = document.getElementsByTagName("input");
  //   if ((element.value = "")) {
  //     console.log("ABhay");
  //   }
  document.getElementsByTagName("input").innerHTML = j;
}

var foo = function() {
  var button = document.createElement("button");
  //   element = document.getElementsByTagName("input");
  //   button.innerHTML = element.getElementById("io");
  button.innerHTML = document.getElementsByTagName("input");
  button.onClick = function() {
    alert("here be dragons");
    return false;
  };

  document.body.appendChild(button);
};

function real() {
  document.getElementById("demo").innerHTML = element;
  //   var element = document.createElement("input");

  //   element.setAttribute("type", type);
  //   element.setAttribute("value", type);
  //   element.setAttribute("name", type);

  //   var foo = document.getElementById("demo");

  //   foo.appendChild(element);
}

function Test2() {
  return (
    <div className="App">
      <div>
        <h1>AddItems</h1>
        <div style={{ display: "inline" }}>
          <input type="text" id="io" onClick={() => foo()} />
          <button
            onClick={() => real()}
            type="submit"
            style={{ cursor: "pointer" }}
          >
            Add
          </button>
        </div>
        <div>
          <button type="button">Edit</button>
          <button type="button">Delete</button>
          <button>Add More</button>
        </div>
      </div>

      <p id="demo"></p>
    </div>
  );
}

export default Test2;
