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
  } else if (tab == "Engineering") {
    var title = "Engineering";
  } else if (tab == "Marketing") {
    var title = "Marketing";
  } else if (tab == "Customer Experience") {
    var title = "Customer Experience";
  } else if (tab == "HR") {
    var title = "HR";
  } else if (tab == "Business") {
    var title = "Business";
  } else if (tab == "Operations") {
    var title = "Operations";
  } else if (tab == "Finance") {
    var title = "Finance";
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
      {tab == "Product" ? <h1>{title}</h1> : ""}
      {tab == "Design" ? <h1>{title}</h1> : ""}
      {tab == "Engineering" ? <h1>{title}</h1> : ""}
      {tab == "Marketing" ? <h1>{title}</h1> : ""}
      {tab == "Customer Experience" ? <h1>{title}</h1> : ""}
      {tab == "HR" ? <h1>{title}</h1> : ""}
      {tab == "Business" ? <h1>{title}</h1> : ""}
      {tab == "Operations" ? <h1>{title}</h1> : ""}
      {tab == "Finance" ? <h1>{title}</h1> : ""}

      <div>Hi {title}</div>
    </>
  );
}
