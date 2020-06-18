import React, { useState } from "react";
import "./Tabs.css";

export default function Tabs(props) {
  //   const [active, setActive] = useState(false);
  //   const [tab, setTab] = useState(props.hide);
  //   //   Product: true,
  //   //   Design: true,
  //   //   Engineering: true,
  //   //   Marketing: true,
  //   //   CustomerExperience: true,
  //   //   HR: true,
  //   //   Business: true,
  //   //   Operations: true,
  //   //   Finance: true,
  //   // });

  //   function openCity(event) {
  //     var pro = String(event.target.getAttribute("value"));
  //     alert(pro);
  //     // setActive(true);
  //     // setTab(true);
  //   }

  //   const aware = [
  //     "Product",
  //     "Design",
  //     "Engineering",
  //     "Marketing",
  //     "Customer Experience",
  //     "HR",
  //     "Business",
  //     "Operations",
  //     "Finance",
  //   ];
  //   const Taware = aware.map((items) => {
  //     return (
  //       <div>
  //         <a
  //           className="anctag"
  //           href="javascript:void(0)"
  //           onClick={() => setTab(true)}
  //         >
  //           <div
  //             value={items}
  //             onClick={(event) => openCity(event)}
  //             // className="paddingText tablink borderBottom"
  //             className={
  //               tab == true
  //                 ? "borderBottom1 paddingText tablink"
  //                 : "borderBottom paddingText tablink"
  //             }
  //           >
  //             {items}
  //           </div>
  //         </a>
  //       </div>
  //     );
  //   });

  //   return (
  //     <>
  //       <h1>Tabs</h1>

  //       <div className="singleLine">{Taware}</div>
  //       {tab == true ? <h1>Abhay</h1> : ""}
  //     </>
  //   );
  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  window.onload = function (e) {
    document.getElementById("defaultOpen").click();
  };

  return (
    <>
      <div class="tab">
        <div
          class="tablinks"
          onClick={(event) => openCity(event, "London")}
          id="defaultOpen"
        >
          London
        </div>
        <div class="tablinks" onClick={(event) => openCity(event, "Paris")}>
          Paris
        </div>
        <div class="tablinks" onClick={(event) => openCity(event, "Tokyo")}>
          Tokyo
        </div>
      </div>

      <div id="London" class="tabcontent">
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>

      <div id="Paris" class="tabcontent">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="Tokyo" class="tabcontent">
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </>
  );
}
