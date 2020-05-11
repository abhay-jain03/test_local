import React, { useEffect, useState } from "react";
// import s from "./main.css";
import "./profileDetails.css";
import "./Responsive.css";
// import classNames from "classnames";
// import useStyles from "isomorphic-style-loader/useStyles";
import MyCommission from "./MyCommission";

const Profile = () => {
  // useStyles(s);
  const [tab, setTab] = useState("PROFILE");

  return (
    <div>
      <div className="spareFullBack">
        <div style={{ paddingTop: "2rem" }}>
          <div className="spareWidth">
            <div className="flexspare mobFlexspare">
              <div className="spareContentFirst">
                <div className="flexspare spareUserLogo">
                  <div style={{ width: "27%" }}>
                    <img className="imgUserSpare" />
                    <div className="silverSpare">Silver</div>
                  </div>
                  <div style={{ width: "70%", marginLeft: "3%" }}>
                    <div className="workshopNameSpare">
                      Bharat Moters, Gurgaon
                    </div>
                    <div
                      className="cityNameSpare"
                      style={{ paddingTop: "0.5rem" }}
                    >
                      Haryana
                    </div>
                    <div style={{ paddingTop: "1rem" }}>
                      <select className="selectTag">
                        <option>I Am Agent</option>
                        <option>I Am User</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="spareUserLogo">
                  <div className="billingspare">This month billing</div>
                  <div className="amountspare">₹ 2500/ 2L</div>
                  <div className="progressbarspare">
                    <div
                      className="progressLineSpare"
                      style={{ width: "33%" }}
                    />
                  </div>
                  <div className="Getcashback">
                    Get ₹ 10000 cashback on ₹2L monthly billing
                  </div>
                  <div className="Seeallbenefits">See all benefits</div>

                  <div className="Cashbackspare">Cashback balance</div>
                  <div
                    className="flexspare"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="cashbackamountspare">₹ 1200</div>
                    <div className="Viewhistoryspare">View history</div>
                  </div>
                </div>
                {/* <div
                  className="flexspare justifyflexspare"
                  style={{ marginTop: "0.625rem", color: "#69B8FB" }}
                >
                  {`${prop user.first_name}`}
                </div> */}
                <div style={{ marginTop: "1rem" }}>
                  <div
                    className="flexspare listBlockEnd"
                    onClick={() => setTab("PROFILE")}
                  >
                    <span className="PROFILE">My Profile</span>
                  </div>
                  <div
                    className="flexspare listBlockEnd"
                    onClick={() => setTab("ORDERS")}
                  >
                    <span className="ORDERS">My Orders</span>
                  </div>
                  <div
                    className="flexspare listBlockEnd"
                    onClick={() => setTab("RETAILERS")}
                  >
                    <span className="RETAILERS">My Retailers</span>
                  </div>
                  <div
                    className="flexspare listBlockEnd"
                    onClick={() => setTab("MyCommission")}
                  >
                    <span className="RETAILERS">My Commission</span>
                  </div>
                  <div className="flexspare listBlockEnd">
                    <span>Logout</span>
                  </div>
                </div>
              </div>
              <div className="spareContentSecond">
                <MyCommission />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
