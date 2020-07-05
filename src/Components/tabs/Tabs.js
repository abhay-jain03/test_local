import React, { useState } from "react";
import "./Tabs.css";

export default function Tabs(props) {
  const [active, setActive] = useState("Product");
  const [tab, setTab] = useState("Product");

  function openCity(event) {
    var pro = String(event.target.getAttribute("value"));
    // alert(pro);
    setActive(pro);
    setTab(pro);
  }

  if (tab == "Product") {
    var title = "Product";
  } else if (tab == "Design") {
    var title = "Design";
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
            className={
              active == items ? "borderBottom1 paddingText" : "paddingText"
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
      {tab == "Product" ? <h1>Abhay</h1> : ""}
      {tab == "Design" ? <h1>Jain</h1> : ""}
    </>
  );
}
