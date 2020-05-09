import React from "react";
import "./Order.css";

function Order() {
  return (
    <>
      <div>
        <ul class="prog">
          <li class="prog-done">Order Processing</li>
          <li class="prog-done">Pre-Production</li>
          <li class="prog-done">In Production</li>
          <li class="prog-todo">Shipped</li>
          <li class="prog-todo prog-end">Delivered</li>
        </ul>
      </div>
    </>
  );
}

export default Order;
