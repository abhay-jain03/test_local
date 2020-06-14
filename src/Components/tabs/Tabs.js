import React, { useState } from "react";
import "./Tabs.css";

export default function Tabs() {
  const [Border, setBorder] = useState(true);
  const [tab, setTab] = useState(true);

  function openCity(event, productName) {
    setTab(true);
    let pro = String(event.target.value);
    alert(pro);
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
        {tab == true ? (
          <a
            className="anctag"
            href="javascript:void(0)"
            value={items}
            onClick={(event) => openCity(event, { items })}
          >
            <div className="borderBottom paddingText tablink">{items}</div>
          </a>
        ) : (
          " "
        )}
      </div>
    );
  });

  return (
    <>
      <h1>Tabs</h1>

      <div className="singleLine">{Taware}</div>
    </>
  );
}
