import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursesPage from "./components/courses/CoursesPage";

const Routes = () => {
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="about" component={AboutPage} />
      <Route path="courses" component={CoursesPage} />
    </div>
  </Router>;
};

export default Routes;
