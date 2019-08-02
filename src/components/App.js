import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import CoursesPage from "./courses/CoursesPage";
import configureStore from "../store/configureStore";
import { Provider } from "react-redux";
import { loadCourses } from "../actions/courseActions";
import ManageCoursePage from "./courses/ManageCoursePage";

const store = configureStore();
store.dispatch(loadCourses());

const AppPage = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            {" | "}
            <Link to="/courses">Courses</Link>
            {" | "}
            <Link to="/about">About</Link>
          </nav>

          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/courses" component={CoursesPage} />
          <Route exact path="/course" component={ManageCoursePage} />
          <Route path="/course/:id" component={ManageCoursePage} />
        </div>
      </Router>
    </Provider>
  );
};

export default AppPage;
