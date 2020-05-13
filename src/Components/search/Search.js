import React from "react";
import "./Search.css";
import "./Responsive.css";

function Search() {
  function open() {
    document.getElementById("modalbox").style.display = "flex";
  }
  function close() {
    document.getElementById("modalbox").style.display = "none";
  }

  return (
    <>
      <div>
        <button onClick={() => open()}>open</button>

        <div id="modalbox" className="modalSearch">
          <div className="modalSearchContent">
            <span onClick={() => close()} className="closeSearch">
              &times;
            </span>
            <div className=" flexSearch Noresultsfound">
              No results found for “958556875”
            </div>
            <div className="flexSearch Describehere">
              Describe here in detail
            </div>
            <div className="flexSearch">
              <input className="partBoxSearch" placeholder="Part Number" />
            </div>
            <div
              className="flexSearch"
              style={{ marginTop: "14px", justifyContent: "space-between" }}
            >
              <input
                className="brandSearch"
                placeholder="Brand"
                style={{ marginRight: "6%" }}
              />
              <input className="brandSearch" placeholder="Brand" />
            </div>
            <div className="flexSearch" style={{ marginTop: "14px" }}>
              <textarea className="descSearch" placeholder="Description" />
            </div>
            <div className="flexSearch" style={{ marginTop: "18px" }}>
              <input className="partBoxSearch" placeholder="Name" />
            </div>
            <div className="flexSearch" style={{ marginTop: "14px" }}>
              <input className="partBoxSearch" placeholder="Email" />
            </div>

            <div className="flexSearch" style={{ marginTop: "14px" }}>
              <input className="nineone" value="+91" disabled />
              <input className="partBoxSearch" placeholder="Mobile" />
            </div>

            <div className="flexSearch" style={{ marginTop: "14px" }}>
              <textarea className="descSearch" placeholder="Description" />
            </div>
            <button className="submitSearch" type="button">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
