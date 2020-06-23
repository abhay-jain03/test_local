import React from "react";
import "./Mail.css";

export default function Mail() {
  return (
    <>
      <div style={{ padding: "0rem 5rem" }}>
        <div className="flexMail">
          <img
            style={{ height: "6rem" }}
            src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/Jobcard/GoMechanic.png"
          />
          <img
            style={{ width: "100%", height: "10rem" }}
            src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/Jobcard/Estimate.jpg"
          />
          <img
            style={{ width: "50%" }}
            src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/Jobcard/orderConfirmed.png"
          />
        </div>

        <div>
          <p>Hi Test</p>
          <div>Please find a work estimate attached for your car</div>
          <p>In the meantime, you can track your order below.</p>
          <p>Give our love to your car :-) GoMechanic</p>
        </div>

        <hr style={{ border: "1.25px solid red", margin: "2rem 0px" }} />

        <div className="flexMail">
          <button className="trackButton">TRACK ORDER</button>
        </div>

        <br />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "15px",
          }}
        >
          <table style={{ border: "1px solid" }}>
            <tr className="table1">
              <th colSpan="2">Here are your order details</th>
            </tr>
            <tr>
              <td className="tdborder">Booking ID</td>
              <td className="tdborder">20200603912065465</td>
            </tr>
            <tr>
              <td className="tdborder">Car Brand</td>
              <td className="tdborder">Tata</td>
            </tr>
            <tr>
              <td className="tdborder">Car Model</td>
              <td className="tdborder">Tiago Diesel</td>
            </tr>
            <tr>
              <td className="tdborder">Registration no</td>
              <td className="tdborder">TTIAGOD9779923235</td>
            </tr>
            <tr>
              <td className="tdborder">Odometer Reading(Km)</td>
              <td className="tdborder">0</td>
            </tr>
            <tr>
              <td className="tdborder">Date</td>
              <td className="tdborder">June 3, 2020</td>
            </tr>
            <tr>
              <td className="tdborder">Time</td>
              <td className="tdborder">23:31</td>
            </tr>
          </table>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}>
            <img
              style={{ height: "6rem", width: "8rem" }}
              src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/Jobcard/unnamed2.jpg"
            />
            <table style={{ border: "1px solid" }}>
              <tr className="table1">
                <th colSpan="2">Customer Executive on Duty</th>
              </tr>
              <tr>
                <td className="tdborder">Name</td>
                <td className="tdborder">jassi test LM</td>
              </tr>
              <tr>
                <td className="tdborder">Mobile</td>
                <td className="tdborder">5674893212</td>
              </tr>
              <tr>
                <td className="tdborder">Email</td>
                <td className="tdborder">jsk@gmail.com</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
