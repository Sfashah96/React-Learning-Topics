// CourseList.jsx
import React from 'react';

const CourseList = ({ courses }) => {
  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {courses.map((course) => (
          <li>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
