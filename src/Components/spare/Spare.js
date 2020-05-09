import React from "react";
import "./Spare.css";
import "./Responsive.css";
import SpareOrder from "./SpareOrder";

function Spare() {
  return (
    <div>
      <div className="spare-full-back">
        <div style={{ paddingTop: "2rem" }}>
          <div className="spare-width">
            <div className="flexspare mob-flexspare">
              <div className="spare-content-1">
                <div className="spare-user-logo flexspare">
                  <img className="img-user-spare" />
                </div>
                <div
                  className="flexspare justifyflexspare"
                  style={{ marginTop: "0.625rem", color: "#69B8FB" }}
                >
                  Bharat Motors, Gurgaon
                </div>
                <div
                  className="flexspare justifyflexspare"
                  style={{ marginTop: "1rem" }}
                >
                  <select className="select-tag">
                    <option>I Am Agent</option>
                    <option>I Am User</option>
                  </select>
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <div className="flexspare list-block-end">
                    <a className="a-tag-spare" href="#">
                      My Profile
                    </a>
                  </div>
                  <div className="flexspare list-block-end">
                    <a className="a-tag-spare" href="#">
                      My Orders
                    </a>
                  </div>
                  <div className="flexspare list-block-end">
                    <a className="a-tag-spare" href="#">
                      My Retailers
                    </a>
                  </div>
                  <div className="flexspare list-block-end">
                    <a className="a-tag-spare" href="#">
                      Logout
                    </a>
                  </div>
                </div>
              </div>
              <div className="spare-content-2">
                <SpareOrder />
                <SpareOrder />
                <SpareOrder />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spare;
