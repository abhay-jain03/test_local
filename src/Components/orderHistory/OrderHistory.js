import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import "./OrderHistory.css?v=28022020";
import "./Responsive.css?v=28022020";

function OrderHistory() {
  const onGoingOrdersList = ["abcd"];
  const completedOrdersList = ["efgh"];

  const OnGoingOrder = onGoingOrdersList.map((currentOrder, index) => {
    return (
      <div key={index} className="order-oh">
        <div className="order-header-oh">
          <img
            className="car-logo-oh"
            src={currentOrder.car_img}
            alt="img"
          ></img>
          <div className="car-details-oh">
            <div className="car-type-oh">
              {" "}
              {currentOrder.brand} {currentOrder.model}, {currentOrder.fuelType}
            </div>
            <div className="date-oh">
              {currentOrder.pick_date} | {currentOrder.item} Items
            </div>
          </div>
          <div className="car-track-link-oh">
            <Link
              className="track-order-oh"
              to={`/order/${currentOrder.order_id}`}
            >
              TRACK ORDER
            </Link>
          </div>
        </div>
        <div className="line3-oh"></div>
        <div className="order-body-oh">
          <div
            className="booking-details-oh"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="booking-id-oh">BOOKING ID</div>
            <div className="booking-id-number-oh">{currentOrder.order_id}</div>
          </div>
          <div
            className="order-status-oh"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="status-oh">STATUS</div>
            <div className="status-update-oh">{currentOrder.order_status}</div>
          </div>
        </div>
        <div className="serviceshead-oh">
          <div className="services-oh">{currentOrder.details}</div>
        </div>
        <Link
          className="track-order-mob"
          style={{ textDecoration: "none", color: "#ffffff" }}
          to={`/order/${currentOrder.order_id}`}
        >
          <button className="track-order-mob-view">TRACK ORDER</button>
        </Link>
      </div>
    );
  });

  const completedOrder = completedOrdersList.map((completedOrders, index) => {
    return (
      <div key={index} className="order-oh">
        <div className="order-header-oh">
          <img
            className="car-logo-oh"
            src={completedOrders.car_img}
            alt="img"
          ></img>
          <div className="car-details-oh">
            <div className="car-type-oh">
              {" "}
              {completedOrders.brand} {completedOrders.model},{" "}
              {completedOrders.fuelType}
            </div>
            <div className="date-oh">
              {completedOrders.pick_date} | {completedOrders.item} Items
            </div>
          </div>
          <div className="car-track-link-oh">
            <Link
              className="view-details-oh track-order-oh"
              to={`/completed-order/${completedOrders.order_id}`}
            >
              VIEW DETAILS
            </Link>
          </div>
        </div>
        <div className="line3-oh"></div>
        <div className="order-body-oh">
          <div
            className="booking-details-oh"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="booking-id-oh">BOOKING ID</div>
            <div className="booking-id-number-oh">
              {completedOrders.order_id}
            </div>
          </div>
          <div
            className="order-status-oh"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="status-oh">STATUS</div>
            <div className="status-update-oh">
              {completedOrders.order_status}
            </div>
          </div>
        </div>
        <div className="serviceshead-oh">
          <div className="services-oh">{completedOrders.details}</div>
        </div>
        <Link
          className="track-order-mob view-details-mob"
          style={{ textDecoration: "none", color: "#ffffff" }}
          to={`/completed-order/${completedOrders.order_id}`}
        >
          <button className="view-details-mob-view track-order-mob-view">
            VIEW DETAILS
          </button>
        </Link>
      </div>
    );
  });
  return (
    <>
      <div className="App">
        <div className="main-content-oh">
          <div className="sub-content-oh">
            <div className="order-history-oh">ORDER HISTORY</div>
            <div className="heading-6 content-box1-oh">
              <div className="ongoing-order-oh">Ongoing orders</div>
              <div className="line1-oh"></div>
              {OnGoingOrder}
            </div>
            <div className="heading-6 content-box2-oh">
              <div className="ongoing-order-oh">Completed Orders</div>
              <div className="line1-oh"></div>
              <div className="order-cart"></div>
              {completedOrder}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderHistory;
