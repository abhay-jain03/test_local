/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
  Link,
} from "react-router-dom";

const Test1 = lazy(() => import("./Components/test1/Test1"));
const Test6 = lazy(() => import("./Components/test6/Test6"));
const Fetch = lazy(() => import("./Components/fetch/Fetch"));
const ReactLearn = lazy(() => import("./Components/reactLearn/ReactLearn"));
const Carousel = lazy(() => import("./Components/carousel/Carousel"));
const Tabs = lazy(() => import("./Components/tabs/Tabs"));
const Mail = lazy(() => import("./Components/mail/Mail"));

const RoutingComponent = (props) => {
  return (
    <Suspense fallback={<div></div>}>
      <Router>
        <Switch>
          <Route exact path="/mail" component={Mail} 
          // Mail Templates
          /> 
          <Route exact path="/tabs" component={Tabs} />
          <Route exact path="/carousel" component={Carousel} />
          <Route exact path="/learn" component={ReactLearn} 
          // Form with class-Based component
          />
          <Route exact path="/fetch" component={Fetch} 
          // API Fetch
          />
          <Route exact path="/" render={() => <Redirect to="/Test1" />} />
          <Route exact path="/Test6" component={Test6} />
          <Route exact path="/Test1" component={Test1} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default RoutingComponent;
