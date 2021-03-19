import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Navigation1 from "./components/Navigation1";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Carousels from "./components/Carousels";
import Home from "./components/home/Home";
import Checkout from "./components/home/Checkout";
import ChatIcon from "./components/chat/ChatIcon";
import Login from "./login/login";
import Signup from "./signup/signup";
import Index from "./anotherapi/api";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Carousels />
        <Switch>
          <Route path="/" exact>
            <Login />
            <Navigation1 />
          </Route>
          <Route path="/about">
            <Navigation />
            <About />
          </Route>
          <Route path="/contact">
            <Navigation />
            <Contact />
          </Route>
          <Route path="/checkout">
            <Navigation />
            <Checkout />
          </Route>
          <Route path="/home">
            <Navigation />
            <Home />
          </Route>
          <Route path="/signup">
            <Navigation1 />
            <Signup />
          </Route>
          <Route path="/movie">
            <Navigation />
            <Index />
          </Route>
          <Route component={Error} />
        </Switch>
        <Footer />
        <ChatIcon />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
