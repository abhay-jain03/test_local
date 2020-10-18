// import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import App from "./App";
// import Test2 from "./Components/test2/Test2";

// export default function Routing() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" />
//         <Route path="/a" Component={Test2} />
//         {/* <Route path="/b" Component={Test1} /> */}
//       </Switch>
//     </Router>
//   );
// }
import React, { Suspense, lazy } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
  Link,
} from "react-router-dom";

const Test2 = lazy(() => import("./Components/test2/Test2"));
const Test1 = lazy(() => import("./Components/test1/Test1"));
const Test3 = lazy(() => import("./Components/test3/Test3"));
const Test4 = lazy(() => import("./Components/test4/Test4"));
const Test6 = lazy(() => import("./Components/test6/Test6"));
const Test12 = lazy(() => import("./Components/test12/Test12"));
const Order = lazy(() => import("./Components/order/Order"));
const Test15 = lazy(() => import("./Components/test15/Test15"));
const Profile = lazy(() => import("./Components/profileDetails/Profile"));
const Fetch = lazy(() => import("./Components/fetch/Fetch"));
const OrderHistory = lazy(() =>
  import("./Components/orderHistory/OrderHistory")
);
const Retail = lazy(() => import("./Components/retail/Retailer"));
const Search = lazy(() => import("./Components/search/Search"));
const ReactLearn = lazy(() => import("./Components/reactLearn/ReactLearn"));
const CartAddress = lazy(() => import("./Components/cartAddress/CartAddress"));
const Carousel = lazy(() => import("./Components/carousel/Carousel"));
const Tabs = lazy(() => import("./Components/tabs/Tabs"));
const Mail = lazy(() => import("./Components/mail/Mail"));

const RoutingComponent = (props) => {
  return (
    <Suspense fallback={<div></div>}>
      <Router>
        <Switch>
          <Route exact path="/mail" component={Mail} />
          <Route exact path="/tabs" component={Tabs} />
          <Route exact path="/cart" component={CartAddress} />
          <Route exact path="/carousel" component={Carousel} />
          <Route exact path="/learn" component={ReactLearn} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/retail" component={Retail} />
          <Route exact path="/ui" component={OrderHistory} />
          <Route exact path="/fetch" component={Fetch} />
          <Route exact path="/pro" component={Profile} />
          <Route exact path="/member" component={Test15} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/Test2" component={Test2} />
          <Route exact path="/Test12" component={Test12} />
          {/* <Route exact path="/" component={Test2} /> */}
          <Route exact path="/Test1" component={Test1} />
          <Route exact path="/Test3" component={Test3} />
          <Route exact path="/Test4" component={Test4} />
          <Route exact path="/Test6" component={Test6} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default RoutingComponent;
