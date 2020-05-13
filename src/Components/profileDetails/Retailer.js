import React from "react";
import "./profileDetails.css";
import "./Responsive.css";

function Retailer() {
  const abhay = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const tableview = abhay.map((items) => (
    <tr>
      <td>Hyundai</td>
      <td>5%</td>
      <td>8%</td>
      <td>10%</td>
    </tr>
  ));

  return (
    <>
      <div className="spareFullBack">
        <div className="gridheaderretail">
          <div className="BACKretail">BACK</div>
          <div className="Userretail">
            <div style={{ justifySelf: "center", textAlign: "center" }}>
              <div className="rewardlogoretail">
                <img src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/reward.svg" />
              </div>
              <div className="SilverReward">Silver</div>
            </div>
            <div>
              <div className="Automobileretail">Rahul Automobile Parts</div>
              <div className="automobilegmail">
                rahulautomobileparts@gmail.com
              </div>
              <div className="locationheadretail">
                <div className="automobilephone">+ 91 85000 85000</div>
                <div className="automobileLocation">Gurgaon</div>
              </div>
            </div>
          </div>
          <div className="Createdonretail">Created on: 24/04</div>
          <div className="Createdonretail">DELETE</div>
        </div>

        <div className="RetailDiscounthead">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              alignItems: "center",
            }}
          >
            <div className="RetailerDiscount">
              Retailer Discount and Cashback
            </div>
            <div className="SAVEUPDATERetail">SAVE & UPDATE</div>
          </div>

          <div className="flexspare" style={{ marginTop: "40px" }}>
            <div className="flexcolspare">
              <div className="MilestoneRetail">Milestone </div>
              <select className="Rectangle300retail">
                <option className="monthlybilling">
                  1st ₹2L monthly billing
                </option>
              </select>
              <div className="currentmonthbilling">
                On current month billing
              </div>
            </div>
            <div className="flexcolspare" style={{ marginLeft: "16px" }}>
              <div className="MilestoneRetail">Cashback </div>
              <select className="Rectangle100retail">
                <option className="monthlybilling">5%</option>
              </select>
            </div>
          </div>

          <div className="flexspare" style={{ marginTop: "32px" }}>
            <div className="flexcolspare">
              <div className="MilestoneRetail">Milestone </div>
              <select className="Rectangle300retail">
                <option className="monthlybilling">
                  Next ₹3L monthly billing
                </option>
              </select>
              <div className="currentmonthbilling">
                On current month billing
              </div>
            </div>
            <div className="flexcolspare" style={{ marginLeft: "16px" }}>
              <div className="MilestoneRetail">Cashback </div>
              <select className="Rectangle100retail">
                <option className="monthlybilling">8%</option>
              </select>
            </div>
          </div>

          <div className="flexspare DiscountBrands">Discount on Brands</div>

          <div style={{ marginTop: "25px" }}>
            <table className="thheade">
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Silver</th>
                  <th>Gold</th>
                  <th>Platinum</th>
                </tr>
              </thead>
              <tbody>{tableview}</tbody>
            </table>
          </div>

          <div style={{ marginTop: "77px" }}>
            <div className="Creditlimit">Credit limit</div>
            <div style={{ marginTop: "21px" }}>
              <select className="Rectangle300retail">
                <option>₹1L monthly </option>
              </select>
            </div>
          </div>

          <div style={{ marginTop: "32px", paddingBottom: "100px" }}>
            <div className="Creditlimit">COD Service</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Retailer;
