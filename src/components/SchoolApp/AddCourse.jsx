// AddCourse.jsx
import React, { useState } from 'react';

const AddCourse = ({ addCourse }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addCourse(title);
      setTitle('');
    }
  };

  return (
    <div>
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter course title"
        />
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default AddCourse;