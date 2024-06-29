// AddStudent.jsx
import React, { useState } from 'react';

const AddStudent = ({ addStudent }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addStudent(name);
      setName('');
    }
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter student name"
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
