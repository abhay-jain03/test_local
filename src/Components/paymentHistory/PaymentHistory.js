import React from "react";
import "./PaymentHistory.css";
import "./Responsive.css";

function PaymentHistory(props) {
  const closetab = () => {
    props.closeModal();
  };

  const abhay = ["500", "1000", "2000", "3000", "4000"];

  const webPayment = abhay.map((items) => (
    <tr style={{ backgroundColor: "#f6f6f6", marginBottom: "1rem" }}>
      <td className="date-text-payment">5 March 2020</td>
      <td className="date-text-payment">{items}</td>
      <td className="date-text-payment">Paytm</td>
      <td className="success-payment failed-payment">Success</td>
      <td style={{ textAlign: "center" }}>
        <img className="Shape-download-payment" src="/img/Shape1.svg" />
      </td>
    </tr>
  ));

  const mobilePayment = abhay.map((value) => (
    <div className="transaction-box">
      <div className="flex-row-pay" style={{ width: "100%" }}>
        <div className="width70mobpayment">
          <img className="paytm-logo" src="/img/Group 7572.jpg" />
          <p className="mob-date-payment">5 March 2020</p>
        </div>
        <div style={{ width: "28%", textAlign: "center" }}>
          <p className="mob-amount-payment">Rs {value}</p>
          <p className="mob-success-payment mob-failed-payment">Success</p>
        </div>
      </div>
      <div className="flex-row-pay download-mobreceipt">
        <a style={{ cursor: "pointer" }}>
          <img src="/img/Shape2.svg" />
          <span className="mob-receipt-payment">Download Receipt</span>
        </a>
      </div>
    </div>
  ));

  return (
    <div>
      {/* <div style={{ cursor: "pointer" }} onClick={() => showPaymentModal()}>
        View details
      </div> */}
      <div id="pay-Modal" className="payment-modal">
        <div className="payment-modal-content">
          <div className="payment-modal-header">
            <span onClick={() => closetab()} className="payment-close">
              &times;
            </span>
            <p className="payment-header-text">Payment History</p>
          </div>
          <hr />
          <div className="payment-modal-body">
            <div className="flex-row-pay mob-flex-pay">
              <div className="width-50 flex-row-pay">
                <p className="width-50 payment-order">Order #</p>
                <p className="width-50 payment-order-id">19283903</p>
              </div>
              <div className="width-50 flex-row-pay">
                <p className="width-50 payment-order">Total Bill</p>
                <p className="width-50 payment-order-id">Rs. 2999</p>
              </div>
            </div>
            <div className="flex-row-pay mob-flex-pay">
              <div className="width-50 flex-row-pay">
                <p className="width-50 payment-order">Amount paid</p>
                <p className="width-50 payment-order-id">Rs. 1000</p>
              </div>
              <div className="width-50 flex-row-pay">
                <p className="width-50 payment-order">Amount Pending</p>
                <p className="width-50 payment-order-id">Rs. 1999</p>
              </div>
            </div>
            <div className="flex-row-pay tableScroll-pay web-table-payment">
              <table className="table-payment">
                <thead>
                  <tr style={{ height: "3.3rem", textAlign: "center" }}>
                    <th className="date-payment">Date</th>
                    <th className="date-payment">Payment amount</th>
                    <th className="date-payment">Payment method</th>
                    <th className="date-payment">Status</th>
                    <th className="date-payment">Receipt</th>
                  </tr>
                </thead>
                <tbody>{webPayment}</tbody>
              </table>
            </div>
          </div>
          {/* Mobile View */}
          <div className="mob-table-payment">
            <p className="Previous-Transactions">Previous Transactions</p>
            <div style={{ overflowY: "scroll", height: "8rem" }}>
              {mobilePayment}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentHistory;
