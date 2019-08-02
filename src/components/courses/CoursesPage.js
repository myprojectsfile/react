import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course);
  }

  render() {
    const { courses } = this.props;
    return (
      <div>
        <h1>Course List</h1>
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return { courses: state.courses };
}

function mapDispathToProps(dispatch) {
  return { actions: bindActionCreators(courseActions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispathToProps
)(CoursesPage);
