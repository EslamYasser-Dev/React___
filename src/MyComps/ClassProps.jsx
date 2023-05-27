import React from 'react';
import { Component } from 'react';

class ClassProps extends Component {
  render() {
    const { course1, course2, childElement } = this.props;
    
    return (
      <div>
        <h3>Courses:</h3>
        <ul>
          <li>{course1}</li>
          <li>{course2}</li>
        </ul>
        <div>{childElement}</div>
      </div>
    );
  }
}

export default ClassProps;