// StudentList.jsx
import React from 'react';

const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li >{student }</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
