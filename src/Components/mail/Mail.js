import React from "react";
import "./Mail.css";

export default function Mail() {
  return (
    <>
      <div style={{ padding: "0rem 5rem" }}>
        <table className="flexMail">
          <tr>
            <td>
              <img
                alt="img"
                style={{ height: "6rem" }}
                src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/Jobcard/GoMechanic.png"
              />
            </td>
          </tr>
          <tr>
            <td>
              <img
                alt="img"
                style={{ width: "100%", height: "10rem" }}
                src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/Jobcard/Estimate.jpg"
              />
            </td>
          </tr>
          <tr>
            <td>
              <img
                alt="img"
                style={{ width: "50%" }}
                src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/Jobcard/orderConfirmed.png"
              />
            </td>
          </tr>
        </table>

        <table>
          <tr>
            <td>Hi Test</td>
          </tr>
          <tr>
            <td>Please find a work estimate attached for your car</td>
          </tr>
          <tr>
            <td>In the meantime, you can track your order below.</td>
          </tr>
          <tr>
            <td>Give our love to your car :-) GoMechanic</td>
          </tr>
        </table>

        <hr style={{ border: "1.25px solid red", margin: "2rem 0px" }} />

        <table className="flexMail">
          <tr>
            <td>
              <button className="trackButton">TRACK ORDER</button>
            </td>
          </tr>
        </table>

        <br />

        <table>
          <tr>
            <td>Your Order Details</td>
          </tr>
          <tr>
            <td>Order no: 20200622928356481</td>
          </tr>
        </table>

        <br />

        <div className="MailFlex">
          <table className="rightBorder">
            <tr>
              <td>
                <h1>Car Details</h1>
              </td>
            </tr>
            <tr>
              <td>
                <span className="car">Car :</span>
                <span className="carName">
                  Maruti Suzuki Swift Dzire Petrol
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="car">Date :</span>
                <span className="carName">Tue, 2020-06-23 10AM - 12PM</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="car">Registration no :</span>
                <span className="carName">TTIAGOD9779923235</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="car">Odometer Reading(Km) :</span>
                <span className="carName">0</span>
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <td>
                <h1>Customer Executive on Duty</h1>
              </td>
            </tr>
            <tr>
              <td>
                <span className="car">Name :</span>
                <span className="carName">jassi test LM</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="car">Mobile :</span>
                <span className="carName">5674893212</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="car">Email :</span>
                <span className="carName">jsk@gmail.com</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
