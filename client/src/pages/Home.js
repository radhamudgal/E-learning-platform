import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Home.css';

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Study With Me</h1>
          <p>Your personal space for learning, quizzes, and performance tracking.</p>
          {user ? (
            <div className="hero-buttons">
              <Link to="/courses" className="btn">🎥 Watch Courses</Link>
              <Link to="/quizzes" className="btn">📝 Take Quiz</Link>
              <Link to="/performance" className="btn">📊 Performance</Link>
            </div>
          ) : (
            <div className="hero-buttons">
              <Link to="/register" className="btn">Get Started</Link>
              <Link to="/login" className="btn">Login</Link>
            </div>
          )}
        </div>
      </section>

      <section className="features">
        <h2>Why Study With Me?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <span className="feature-icon">🎥</span>
            <h3>High-Quality Courses</h3>
            <p>Access curated video lectures to learn anything easily.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📝</span>
            <h3>Interactive Quizzes</h3>
            <p>Test your knowledge with smart quizzes.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📊</span>
            <h3>Track Progress</h3>
            <p>Monitor your learning journey and performance.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🔒</span>
            <h3>Secure Platform</h3>
            <p>JWT authentication ensures your data is safe.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
