import React from "react";
import "./Spare.css";
import "./Responsive.css";
import img1 from "./noun_drop down_2625917.svg";

function SpareOrder() {
  return (
    <>
      <div>
        <div className="spare-order-top">
          <div className="flexspare order-number-spare">
            <span>Order Number</span>
            <span style={{ paddingLeft: "1rem" }}>#1903/0553149</span>
            <span style={{ paddingLeft: "1rem" }}>(1 item)</span>
          </div>
          <div
            className="flexspare mob-flexspare"
            style={{ justifyContent: "space-between" }}
          >
            <div className="flexspare placed-order-spare">
              <strong>Placed on </strong>
              <span style={{ paddingLeft: "0.75rem" }}>20-03-2020</span>
              <span style={{ paddingLeft: "0.75rem" }}>01:32</span>
            </div>
            <div className="flexspare placed-order-spare">
              <strong>Status </strong>
              <span style={{ paddingLeft: "0.75rem" }}> Delivered</span>
            </div>
            <div className="flexspare placed-order-spare">
              <strong>Total</strong>
              <span style={{ paddingLeft: "0.75rem" }}>5,359.00</span>
            </div>
          </div>
        </div>

        <div className="padding-1-1rem-spare">
          <div className="flexspare">
            <div className="flexspare" style={{ width: "100%" }}>
              <div className="box-order-spare" />
              <div className="flexcolspare" style={{ paddingLeft: "0.625rem" }}>
                <div className="filter-spare">FILTER-AIR CLEANER</div>
                <div
                  className="part-brand-spare"
                  style={{ paddingTop: "0.3rem" }}
                >
                  <span>Part Brand: Abesta</span>
                  <span className="padding-left-0-85rem">
                    Part Number: 72321M58R10
                  </span>
                </div>
                <div
                  style={{ paddingTop: "0.3rem" }}
                  className="part-brand-spare"
                >
                  Brand: SUZUKI / MARUTI
                </div>
              </div>
            </div>
            <div className="flexspare mob-flexspare">
              <div className="invoice-spare">INVOICE</div>
              <div className="return-spare">RETURN</div>
            </div>
          </div>
        </div>

        <div className="padding-1rem-spare">
          <div className="flexspare mob-flexspare">
            <div>
              <span className="unit-price-spares">Unit Price</span>
              <span className="free-spares" style={{ paddingLeft: "0.625rem" }}>
                {" "}
                5,000.00
              </span>
            </div>
            <div className="padding-left-1-5rem">
              <span className="unit-price-spares">Quantity</span>
              <span className="free-spares" style={{ paddingLeft: "0.94rem" }}>
                10
              </span>
            </div>
            <div className="padding-left-1-2rem">
              <span className="unit-price-spares">Amount</span>
              <span className="free-spares" style={{ paddingLeft: "0.75rem" }}>
                {" "}
                5,359.00
              </span>
            </div>
            <div className="padding-left-1-2rem">
              <span className="unit-price-spares">Delivery Charges</span>
              <span className="free-spares" style={{ paddingLeft: "0.75rem" }}>
                Free
              </span>
            </div>
          </div>
        </div>

        <div className="padding-1rem-spare">
          <div className="flexspare">
            <div>
              <span className="unit-price-spares">Payment option</span>
              <span style={{ paddingLeft: "0.94rem" }} className="free-spares">
                Paid online
              </span>
            </div>
          </div>
        </div>

        <div className="padding-1rem-spare flexspare">
          <span className="tracking-information-spare">
            Tracking information
          </span>
          <img style={{ paddingLeft: "0.625rem" }} src={img1} />
        </div>

        <div className="padding-1rem-spare">
          <div
            className="flexspare mob-flexspare padding-right-1-87rem"
            style={{ justifyContent: "space-between" }}
          >
            <div>
              <span className="unit-price-spares">AWB number:</span>
              <span className="filter-spare"> Package #IND1903/0553149-1</span>
            </div>
            <div>
              <span className="unit-price-spares">
                Estimated delivery date:
              </span>
              <span className="filter-spare"> 25-03-2020</span>
            </div>
          </div>
        </div>

        <div className="padding-1rem-spare" style={{ marginTop: "2.25rem" }}>
          <div className="flexspare">
            <ul className="prog">
              <li className="prog-done">
                <span className="placed-on-spare">Placed on</span>
              </li>
              <li className="prog-done">
                <span className="placed-on-spare">Processing</span>
              </li>
              <li className="prog-done">
                <span className="placed-on-spare">Ready to Send</span>
              </li>
              <li className="prog-done">
                <span className="placed-on-spare">Exp. dispatch date</span>
              </li>
              <li className="prog-done prog-end">
                <span className="placed-on-spare">Expected delivery date</span>{" "}
              </li>
            </ul>
          </div>
        </div>

        <div
          className="padding-1rem-spare"
          style={{ marginTop: "2.25rem", marginBottom: "2.12rem" }}
        >
          <div className="flexspare">
            <span className="tracking-information-spare">
              See Shipping Address
            </span>
            <img
              src={img1}
              style={{ transform: "rotate(180deg)", paddingRight: "0.43rem" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SpareOrder;
