import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Icons.css";
import {
  FaChartLine, FaRobot, FaBullhorn, FaChartBar,
  FaShieldAlt, FaBug, FaJava, FaPython, FaReact, FaMobileAlt
} from "react-icons/fa"; // FaMobileAlt used for Flutter

const courses = [
  { title: "Business Analyst", icon: <FaChartLine /> },
  { title: "Data Scientist", icon: <FaRobot /> },
  { title: "Digital Marketing", icon: <FaBullhorn /> },
  { title: "Flutter", icon: <FaMobileAlt /> }, // ✅ Added Flutter
  { title: "Data Analyst", icon: <FaChartBar /> },
  { title: "Cybersecurity", icon: <FaShieldAlt /> },
  { title: "Software Testing", icon: <FaBug /> },
  { title: "Java", icon: <FaJava /> },
  { title: "Python", icon: <FaPython /> },
  { title: "React JS", icon: <FaReact /> },
];

const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

const Icons = () => {
  const navigate = useNavigate();

  const handleClick = (title) => {
    const id = slugify(title);
    navigate(`/internship#${id}`);
  };

  return (
    <div className="course-icons">
      {courses.map((course, index) => (
        <div
          className="icon-item"
          key={index}
          onClick={() => handleClick(course.title)}
          style={{ cursor: "pointer" }}
        >
          <div className="icon">{course.icon}</div>
          <span>{course.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Icons;
