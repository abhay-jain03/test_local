import React, { useState } from "react";
import "./Tabs.css";

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
                onClick={() => (setTab(item.name), setActive(index))}
                className={`borderBottom paddingText ${
                  tab == item.name ? "borderBottom1" : null
                }`}
              >
                {item.name}
              </div>
            </>
          );
        })}
      </div>

      {active == 0 ? <div>Hello</div> : null}
      {active == 1 ? <div>Hi</div> : null}
      {active == 2 ? <div>How</div> : null}
      {active == 3 ? <div>Are</div> : null}
    </>
  );
}
