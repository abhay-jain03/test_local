import React, { useState } from "react";
import "./Tabs.css";
import Product from "./Product";

export default function Tabs(props) {
  const [tab, setTab] = useState("Product");
  const [active, setActive] = useState(false);

  const aware = [
    { name: "Product" },
    { name: "Design" },
    { name: "Engineering" },
    { name: "Marketing" },
    { name: "Customer Experience" },
    { name: "HR" },
    { name: "Business" },
    { name: "Operations" },
    { name: "Finance" },
  ];

  return (
    <>
      <h1>Tabs</h1>

      <div className="singleLine">
        {aware.map((item, index) => {
          return (
            <>
              <div
                onClick={() => {setTab(item.name); setActive(index);}}
                className={`borderBottom paddingText ${
                  tab === item.name ? "borderBottom1" : null
                }`}
              >
                {item.name}
              </div>
            </>
          );
        })}
      </div>

      {active === 0 ? (
        <>
          <Product name={tab} />
        </>
      ) : null}
      {active === 1 ? (
        <>
          <Product name={tab} />
        </>
      ) : null}
      {active === 2 ? (
        <>
          <Product name={tab} />
        </>
      ) : null}
      {active === 3 ? (
        <>
          <Product name={tab} />
        </>
      ) : null}
      {active === 4 ? (
        <>
          <Product name={tab} />
        </>
      ) : null}
    </>
  );
}
