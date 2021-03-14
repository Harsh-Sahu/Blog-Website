import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "../src/components/footer";
import Header from "../src/components/header";

import posts from "./components/compose";
import home from "./components/home";
import about from "./components/about";
import contact from "./components/contact";
import blog from "./components/post";
import login from "./components/login";
import register from "./components/register";

const App = () => {
  if (
    window.location.pathname === "/login" ||
    window.location.pathname === "/register" ||
    window.location.pathname === "/"
  )
    return (
      <Router>
        <Route path="/" exact component={login} />
        <Route path="/login" exact component={login} />
        <Route path="/register" exact component={register} />
      </Router>
    );
  else
    return (
      <div>
        <Header />
        <Router>
          <Route path="/home" exact component={home} />
          <Route path="/about" exact component={about} />
          <Route path="/contact" exact component={contact} />
          <Route path="/compose" exact component={posts} />
          <Route path="/post/:postTitle" exact component={blog} />
        </Router>
        <Footer />
      </div>
    );
};

export default App;
