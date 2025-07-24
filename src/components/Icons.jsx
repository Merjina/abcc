// components/CourseIcons.jsx
import React from "react";
import "../styles/Icons.css";
import {
  FaChartLine, FaRobot, FaBullhorn, FaChartBar,
  FaShieldAlt, FaBug, FaJava, FaPython, FaReact
} from "react-icons/fa";

const courses = [
  { title: "Business Analyst", icon: <FaChartLine /> },
  { title: "Data Science", icon: <FaRobot /> },
  { title: "Digital Marketing", icon: <FaBullhorn /> },
  { title: "Data Analyst", icon: <FaChartBar /> },
  { title: "Cybersecurity", icon: <FaShieldAlt /> },
  { title: "Software Testing", icon: <FaBug /> },
  { title: "Java", icon: <FaJava /> },
  { title: "Python", icon: <FaPython /> },
  { title: "React JS", icon: <FaReact /> }
];

const Icons = () => {
  return (
    <div className="course-icons">
      {courses.map((course, index) => (
        <div className="icon-item" key={index}>
          <div className="icon">{course.icon}</div>
          <span>{course.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Icons;
