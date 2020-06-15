import React, { useState } from "react";
import "./Tabs.css";

export default function Tabs() {
  const [active, setActive] = useState(false);
  const [tab, setTab] = useState(false);

  function openCity(event) {
    var pro = String(event.target.getAttribute("value"));
    alert(pro);
    setActive(true);
    setTab(true);
  }

  const aware = [
    "Product",
    "Design",
    "Engineering",
    "Marketing",
    "Customer Experience",
    "HR",
    "Business",
    "Operations",
    "Finance",
  ];
  const Taware = aware.map((items) => {
    return (
      <div>
        <a className="anctag" href="javascript:void(0)">
          <div
            value={items}
            onClick={(event) => openCity(event)}
            // className="paddingText tablink borderBottom"
            className={
              tab == true
                ? "borderBottom1 paddingText tablink"
                : "borderBottom paddingText tablink"
            }
          >
            {items}
          </div>
        </a>
      </div>
    );
  });

  return (
    <>
      <h1>Tabs</h1>

      <div className="singleLine">{Taware}</div>
      {active == true ? <h1>Abhay</h1> : ""}
    </>
  );
}
