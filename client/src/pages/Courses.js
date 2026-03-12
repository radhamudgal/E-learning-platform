import React, { useState, useEffect } from 'react';
import { getCourses, enrollCourse } from '../services/api';
import './Courses.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const res = await getCourses();
      setCourses(res.data.courses);
    } catch (error) {
      console.error('Error loading courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEnroll = async (courseId) => {
    try {
      await enrollCourse(courseId);
      alert('Enrolled successfully!');
      loadCourses();
    } catch (error) {
      alert(error.response?.data?.message || 'Enrollment failed');
    }
  };

  if (loading) return <div className="loading">Loading courses...</div>;

  return (
    <div className="courses-page">
      <h1>Available Courses</h1>
      <div className="courses-grid">
        {courses.map(course => (
          <div key={course._id} className="course-card">
            <div className="course-thumbnail">
              <span className="course-icon">🎥</span>
            </div>
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p className="course-instructor">By: {course.instructor?.name}</p>
              <p className="course-category">{course.category}</p>
              <button onClick={() => handleEnroll(course._id)} className="enroll-btn">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
