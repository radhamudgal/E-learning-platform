import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCourse } from '../services/api';
import { AuthContext } from '../context/AuthContext';
import './CreateCourse.css';

const CreateCourse = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoUrl: '',
    category: '',
    duration: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createCourse(formData);
      alert('Course created successfully!');
      navigate('/courses');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create course');
    }
  };

  if (user?.role !== 'instructor' && user?.role !== 'admin') {
    return <div className="error-page">Only instructors can create courses</div>;
  }

  return (
    <div className="create-course-page">
      <div className="create-course-box">
        <h2>🎥 Create New Course</h2>
        {error && <div className="error-msg">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Course Title"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            required
          />
          <textarea
            placeholder="Course Description"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            required
            rows="4"
          />
          <input
            type="url"
            placeholder="Video URL (YouTube, Vimeo, etc.)"
            value={formData.videoUrl}
            onChange={(e) => setFormData({...formData, videoUrl: e.target.value})}
            required
          />
          <input
            type="text"
            placeholder="Category (e.g., Programming, Design)"
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
            required
          />
          <input
            type="number"
            placeholder="Duration (minutes)"
            value={formData.duration}
            onChange={(e) => setFormData({...formData, duration: e.target.value})}
            min="1"
          />
          <button type="submit" className="submit-btn">Create Course</button>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
