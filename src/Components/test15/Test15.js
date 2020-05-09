import React, { useState } from "react";
import "./Test15.css";
// import classNames from "classnames";
import Skeleton from "react-loading-skeleton";

function Test15() {
  return (
    <>
      <div className="bgcolor">
        <div
          className="flexmembership"
          style={{ justifyContent: "center", paddingTop: "3.4375rem" }}
        >
          <img
            className="linear-background"
            src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/Membership+Benefits.svg"
          />
        </div>

        <div
          className="flexmembership"
          style={{ justifyContent: "center", paddingTop: "1.25rem" }}
        >
          <img src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/Get+assured+cashbacks+and+additional+discounts+based+on+your+monthly+billing.svg" />
        </div>

        <div className="width60member">
          <img
            className="monthbilling"
            src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/This+month+billing.svg"
          />
          <div className="flexmembership" style={{ marginTop: "6px" }}>
            <img src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/%E2%82%B9+2500.svg" />
            <img
              style={{ marginLeft: "10px" }}
              src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/Group+8083.svg"
            />
          </div>

          <div style={{ marginTop: "24px" }}>
            <div style={{ display: "flex" }}>
              <div style={{ marginLeft: "10.625rem" }}>
                <img src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/Get+%E2%82%B9+10000+cashback.svg" />
              </div>
              <div style={{ marginLeft: "10.625rem" }}>
                <img src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/Get+%E2%82%B9+30000+cashback.svg" />
              </div>
            </div>

            <div>
              <img
                src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/coin.svg"
                style={{ position: "absolute", marginLeft: "13.8125rem" }}
              />

              <img
                src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/coin.svg"
                style={{ position: "absolute", marginLeft: "32.8125rem" }}
              />
            </div>
            <img src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/Group+8074.svg" />

            <div style={{ display: "flex" }}>
              <div style={{ marginLeft: "10.625rem" }}>
                <img src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/on+%E2%82%B92L+monthly+billing.svg" />
              </div>
              <div style={{ marginLeft: "10.625rem" }}>
                <img src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/on+%E2%82%B95L+monthly+billing.svg" />
              </div>
            </div>
          </div>

          <div className="flexmembership" style={{ marginTop: "73px" }}>
            <div style={{ marginRight: "33px" }}>
              <div className="Rectangle963">
                <img
                  className="cdf"
                  src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/Silver.svg"
                />
                <img
                  className="Path8875"
                  src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/Path+8875.svg"
                />
                <img src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/Group+7941.svg" />
                <img src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/Group+7950.svg" />
                <div
                  className="flexmembership"
                  style={{ justifyContent: "center", marginBottom: "-1rem" }}
                >
                  <img src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/coin.svg" />
                  <img
                    className="ert"
                    src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/see+benefits.svg"
                  />
                  <img
                    className="Rectangle966"
                    src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/Rectangle+966.svg"
                  />
                </div>
              </div>
            </div>

            <div style={{ marginRight: "33px" }}>
              <div className="Rectangle964">
                <img
                  className="cdf"
                  src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/Gold.svg"
                />
                <img
                  className="Path8875"
                  src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/Path+8875.svg"
                />
                <img src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/Group+7942.svg" />
                <img src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/Group+7950.svg" />
                <div
                  className="flexmembership"
                  style={{ justifyContent: "center", marginBottom: "-1rem" }}
                >
                  <img src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/coin.svg" />
                  <img
                    className="ert"
                    src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/see+benefits.svg"
                  />
                  <img
                    className="Rectangle966"
                    src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/Rectangle+966.svg"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="Rectangle965">
                <img
                  className="cdf"
                  src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/Platinum+.svg"
                />
                <img
                  className="Path8875"
                  src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/Path+8875.svg"
                />
                <img src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/Group+7942.svg" />
                <img src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/Group+7950.svg" />
                <div
                  className="flexmembership"
                  style={{ justifyContent: "center", marginBottom: "-1rem" }}
                >
                  <img src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/coin.svg" />
                  <img
                    className="ert"
                    src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/see+benefits.svg"
                  />
                  <img
                    className="Rectangle966"
                    src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/Rectangle+966.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Test15;
