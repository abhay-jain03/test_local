import React from "react";
import { withRouter } from "react-router-dom";
import Product from "./Product";
import ProductsData from "./Data";

function Test6(props) {
  const productComponents = ProductsData.map((abhay) => (
    <Product key={abhay.name} product={abhay} />
  ));
  return (
    <div>
      <div>{productComponents}</div>
    </div>
  );
}

export default withRouter(Test6);
