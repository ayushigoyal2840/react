import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function CourseStructure(props) {
   console.log(props);
  return (
    <div>
        <h1>Welcome to course {props.match.params.coursename}</h1>
    </div>
  );
} 

export default CourseStructure;
