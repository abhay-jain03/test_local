import React from "react";
import "./CartAddress.css";
import "./Responsive.css";

export default function CartAddress() {
  return (
    <>
      <div className="cartBack">
        <div style={{ paddingTop: "5%" }}>
          <div className="cartBackWhite">
            <div style={{ padding: "2%" }}>
              <div className="selectAddress">Select/Add Address</div>
              <div className="selectText">
                Select from saved address or add a new address
              </div>
              <div className="selectText" style={{ marginTop: "30px" }}>
                Enter a new shipping address for delivery
              </div>
              <div className="companyNameHead">
                <input
                  type="text"
                  className="companyName"
                  placeholder="Company Name"
                />
              </div>
              <div className="GSTBoxHead">
                <input type="text" className="companyName" placeholder="GST" />
                <input type="text" className="companyName" placeholder="Name" />
              </div>
              <div className="GSTBoxHead">
                <div
                  style={{ display: "grid", gridTemplateColumns: "25% 75%" }}
                >
                  <input
                    type="tel"
                    value="+91"
                    disabled
                    style={{
                      border: "solid 1px rgba(155, 155, 155, 0.5)",
                      textAlign: "center",
                    }}
                  />
                  <input
                    type="tel"
                    maxLength="10"
                    className="companyName"
                    placeholder="Mobile"
                  />
                </div>
                <input
                  type="email"
                  className="companyName"
                  placeholder="Email ID"
                />
              </div>
              <div className="AddressBox">
                <input
                  type="text"
                  className="companyName"
                  placeholder="Address 1"
                />
              </div>
              <div className="AddressBox" style={{ marginTop: "1rem" }}>
                <input
                  type="text"
                  className="companyName"
                  placeholder="Address 2"
                />
              </div>
              <div className="AddressBox" style={{ marginTop: "1rem" }}>
                <input
                  type="tel"
                  className="companyName"
                  placeholder="PIN Code"
                />
              </div>
              <div className="CityBox">
                <input type="text" className="companyName" placeholder="City" />
                <input
                  type="text"
                  className="companyName"
                  placeholder="State"
                />
              </div>
              <div
                className="flexCart"
                style={{ marginTop: "13px", alignItems: "center" }}
              >
                <input type="checkbox" />
                <span className="saveAddress">
                  Save address for future order
                </span>
              </div>

              <div className="selectText" style={{ marginTop: "15px" }}>
                Your saved address
              </div>

              <div style={{ marginTop: "1rem" }}>
                <input type="radio" />
                <label>Gurgaon</label>
                <input type="radio" />
                <label>New Delhi</label>
              </div>

              <div className="AddBilling">
                <span className="selectText">+ Add your billing address</span>
                <span className="selectText">Or</span>
                <span className="selectText" style={{ color: "#1daf65" }}>
                  Billing same as Shipping Address
                </span>
              </div>

              <div className="YourParts">
                *Your parts will be delivered at this address.
              </div>

              <button className="btncontinue">CONTINUE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
