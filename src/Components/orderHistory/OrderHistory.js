import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { get, sendOtp } from "../../services/api";
import DesktopSideBar from "../desktopSideBar/DesktopSideBar";
import Header from "../header/Header";
import NoOrder from "../noOrder/NoOrder";
import PageLoader from "../loader/PageLoader";
import statusValue from "./status.js";
import "./OrderHistory.css?v=28022020";
import "./Responsive.css?v=28022020";

function OrderHistory(props) {
  const orderObject = {};
  const number =
    props.match.params.phone !== "undefined" ? props.match.params.phone : "";
  const [showLoginSidebar, setShowLoginSidebar] = useState(false);
  const [orderDetails, setOrderDetails] = useState(orderObject);
  const [showToast, setToast] = useState(false);
  const [hideLoader, setLoader] = useState(true);

  function createOrderObject(data) {
    const orderHistory = {
      ongoing_order: [],
      completed_order: [],
    };
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    data.map((orderItems, index) => {
      var status_id = orderItems.status_id;
      // var order_status = statusValue[orderItems.status_id];
      var orderParams = {
        status_id: "",
        order_id: "",
        item: "",
        details: "",
        pick_date: "",
        brand: "",
        model: "",
        fuelType: "",
        order_status: "",
        car_img: "",
      };
      orderParams.item = orderItems.update_items.length;
      orderParams.status_id = status_id;
      orderParams.order_status = statusValue[status_id];
      orderParams.order_id = orderItems.order_id;

      var d = new Date(orderItems.pick_date.$date);
      var pickDate =
        d.getDate() + " " + monthNames[d.getMonth()] + " " + d.getFullYear();

      orderParams.pick_date = pickDate;
      orderParams.brand = orderItems.car.car_tbl.brand.name;
      orderParams.model = orderItems.car.car_tbl.model.name;
      orderParams.car_img = orderItems.car.car_tbl.model.image_path;
      orderParams.fuelType = orderItems.car.car_tbl.car_type.name;
      if (orderParams.item !== 0) {
        var Details = "";
        orderItems.update_items.map((updateDetails, index) => {
          if (
            updateDetails.package_name != null ||
            updateDetails.package_name === " "
          ) {
            Details += updateDetails.package_name + " ,";
          } else {
            Details += updateDetails.service_name + ",";
          }
        });
        orderParams.details = Details.substring(0, Details.length - 1);
      }
      if (status_id >= 60) {
        orderHistory.completed_order.push(orderParams);
      } else {
        orderHistory.ongoing_order.push(orderParams);
      }
    });
    return orderHistory;
  }

  useEffect(() => {
    var urlNumber = window.location.pathname.split("/")[1];
    var phoneno = /^\d{10}$/;
    if (
      localStorage.getItem("accessToken") == null &&
      urlNumber.match(phoneno)
    ) {
      setToast(true);
      setLoader(false);
      setShowLoginSidebar(true);
      sendOtp("api/send_otp/", {
        number: number,
        source: "order_tracking",
      })
        .then((res) => {})
        .catch((err) => console.log(err));
    } else if (
      localStorage.getItem("accessToken") == null &&
      !urlNumber.match(phoneno)
    ) {
      setLoader(false);
      setShowLoginSidebar(true);
    } else {
      get("api/v1/oauth/customer/order-details/")
        .then((res) => {
          if (res.status === true) {
            // console.log(res.data[0].email);
            setOrderDetails({
              ...orderDetails,
              ...createOrderObject(res.data),
            });
          }
          setLoader(false);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const OnGoingOrder = (onGoingOrdersList) =>
    onGoingOrdersList !== undefined && onGoingOrdersList.length > 0 ? (
      onGoingOrdersList.map((currentOrder, index) => {
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
                  {currentOrder.brand} {currentOrder.model},{" "}
                  {currentOrder.fuelType}
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
                <div className="booking-id-number-oh">
                  {currentOrder.order_id}
                </div>
              </div>
              <div
                className="order-status-oh"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div className="status-oh">STATUS</div>
                <div className="status-update-oh">
                  {currentOrder.order_status}
                </div>
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
      })
    ) : (
      <NoOrder />
    );

  const completedOrder = (completedOrdersList) =>
    completedOrdersList !== undefined && completedOrdersList.length > 0 ? (
      completedOrdersList.map((completedOrders, index) => {
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
            {/* <div className="rating-status-oh">
              <div className="rating-oh">RATING</div>
              <div className="give-rating-oh">Give Rating</div>
            </div> */}
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
      })
    ) : (
      <NoOrder />
    );
  return (
    <>
      <Header />
      {hideLoader ? <PageLoader /> : ""}
      {showLoginSidebar ? (
        <DesktopSideBar
          mobileNumber={number}
          toast={showToast}
          hideHandler={() => setShowLoginSidebar(false)}
        />
      ) : null}
      <div className="App">
        <div className="main-content-oh">
          <div className="sub-content-oh">
            <div className="order-history-oh">ORDER HISTORY</div>
            <div className="heading-6 content-box1-oh">
              <div className="ongoing-order-oh">Ongoing orders</div>
              <div className="line1-oh"></div>
              {OnGoingOrder(orderDetails.ongoing_order)}
            </div>
            <div className="heading-6 content-box2-oh">
              <div className="ongoing-order-oh">Completed Orders</div>
              <div className="line1-oh"></div>
              <div className="order-cart"></div>
              {completedOrder(orderDetails.completed_order)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(OrderHistory);
