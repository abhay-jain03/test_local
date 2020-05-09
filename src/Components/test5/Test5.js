import React from "react";
import jimper from "../test4/Data";
import Test3 from "../test3/Test3";

function Test5(props) {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const doubled = nums.map(function(num) {
    return num * 2;
  });

  //   const abhay = jimper.map((data) => {
  //     var w = data.phone;
  //   });
  //   console.log(abhay);
  const jokeComponents = jimper.map(data => (
    <Test3 key={data.id} question={data.question} punchLine={data.punchLine} />
  ));
  //   console.log(doubled);
  // document.getElementById("real").innerHTML=doubled;

  return (
    <div className="contacts">
      <div className="contact-card">
        <img src={props.imgUrl} />
        <h3>{props.name}</h3>
        <p>Phone:{props.phone}</p>
        <p>Email:{props.email}</p>
      </div>
      {/* <div>{jokeComponents.id[0]}</div> */}
      <p id="real"></p>
    </div>
  );
}

export default Test5;
