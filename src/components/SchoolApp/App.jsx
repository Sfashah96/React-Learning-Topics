// App.jsx
import React, { useState, useEffect } from 'react';
import StudentList from './StudentList';
import CourseList from './CourseList';
import AddStudent from './AddStudent';
import AddCourse from './AddCourse';

const App = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

   // Retrieve students from local storage when the component mounts
   useEffect(() => {
    const storedStudents = localStorage.getItem('students');
    if (storedStudents) {
      setStudents(JSON.parse(storedStudents));
    }

    const storedCourses = localStorage.getItem('courses');
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses));
    }
  }, []); // Empty dependency array ensures this runs only once


  const addStudent = (name) => {
    const existingStudents = localStorage.getItem('students')
    const currentStudents = existingStudents ? JSON.parse(existingStudents) : []
    currentStudents.push(name)
    setStudents(currentStudents)
    localStorage.setItem('students', JSON.stringify(currentStudents))
  };

    const addCourse = (title) => {
    const existingCourses = localStorage.getItem('courses')
    const currentCourses = existingCourses ? JSON.parse(existingCourses) : []
    currentCourses.push(title)
    setCourses(currentCourses)
    localStorage.setItem('courses', JSON.stringify(currentCourses))
  };

  
  return (
    <div>
      <h1>School App</h1>
      <AddStudent addStudent={addStudent} />
      <StudentList students={students} />
      <AddCourse addCourse={addCourse} />
      <CourseList courses={courses}/>
    </div>
  );
};

export default App;