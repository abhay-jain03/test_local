import React, { useEffect, useState } from "react";
import "./profileDetails.css";
import "./Responsive.css";

function MyCommission() {
  function accord() {
    var i = 0;
    var acc = document.getElementsByClassName("accordionComm");
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        var panel = this.nextElementSibling;
        if (panel.style.display == "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }

  const date = [
    "Jan 2020",
    "Feb 2020",
    "March 2020",
    "April 2020",
    "May 2020",
    "June 2020",
    "July 2020",
    "Aug 2020",
    "Sept 2020",
    "Oct 2020",
    "Nov 2020",
    "Dec 2020",
  ];
  const SelectDate = date.map((items) => <option>{items}</option>);

  const team = ["brand", "brand", "brand", "brand"];

  const tablebox = team.map((view) => (
    <div className="gridspare">
      <div className="brandtablecommission">Brand</div>
      <div className="orderidcommission">Order id: 123456789</div>
      <div className="orderidcommission">25-04-2020 04:00</div>
      <div className="orderamountcommission"> + ₹ 300</div>
    </div>
  ));

  const store = ["table1", "table2", "table3"];
  const BoxTran = store.map((type) => (
    <div className="boxtransaction">
      <div className="flexspare collapseboxcommission">
        <div className="autoparts">Rahul Auto Parts, Gurgaon</div>
        <div className="totalautoparts"> + ₹ 1500</div>
      </div>
      <div
        className="flexspare imagerowcommission accordionComm"
        onClick={() => accord()}
      >
        <img src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/membership/noun_drop+down_2625917.svg" />
      </div>
      <div className="panel">{tablebox}</div>
    </div>
  ));

  return (
    <>
      <div style={{ background: "#f6f6f6" }}>
        <div
          className="flexspare"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <div className="mycommissionhead">My Commissions</div>
          <div className="editupdate">EDIT & UPDATE</div>
        </div>
        <div className="flexspare cart225rem">
          <div className="cartmyCommission">
            <div className="monthcommission">This Month</div>
            <div className="amountcommission">₹5000:00</div>
          </div>
          <div className="cartmyCommission2">
            <div className="monthcommission">Total</div>
            <div className="amountcommission">₹9700:00</div>
          </div>
          <div className="cartmyCommission3">
            <div className="monthcommission">Overall Business</div>
            <div className="amountcommission">₹40000:00</div>
          </div>
        </div>
        <div className="flexspare" style={{ marginTop: "3.75rem" }}>
          Transaction Details
        </div>
        <div className="flexspare" style={{ marginTop: "2.25rem" }}>
          <select className="dateselect">{SelectDate}</select>
        </div>
        {BoxTran}
      </div>
    </>
  );
}

export default MyCommission;
