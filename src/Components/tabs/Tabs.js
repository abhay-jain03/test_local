import React, { useState } from "react";
import "./Tabs.css";

export default function Tabs(props) {
  const [active, setActive] = useState("Product");
  const [tab, setTab] = useState("Product");

  function openCity(event) {
    var pro = String(event.target.getAttribute("value"));
    setActive(pro);
    setTab(pro);
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

      <div
        style={{
          width: "100%",
          height: "20rem",
          background: "#cdcdea",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src=""
          style={{ border: "1px solid #000", width: "18rem", height: "18rem" }}
        />
        <div
          style={{
            border: "1px solid #000",
            width: "30rem",
            height: "18rem",
            marginLeft: "1rem",
          }}
        >
          <div>
            {aware.map((itemss) => {
              return <div>{tab == itemss ? <h1>{itemss}</h1> : ""}</div>;
            })}
          </div>
          <div>Hi </div>
        </div>
      </div>
    </>
  );
}
