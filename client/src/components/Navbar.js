import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Study With Me</Link>
        
        <div className="nav-menu">
          {user ? (
            <>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/courses" className="nav-link">Courses</Link>
              <Link to="/quizzes" className="nav-link">Quizzes</Link>
              <Link to="/performance" className="nav-link">Performance</Link>
              {(user.role === 'instructor' || user.role === 'admin') && (
                <>
                  <Link to="/create-course" className="nav-link">Create Course</Link>
                  <Link to="/create-quiz" className="nav-link">Create Quiz</Link>
                </>
              )}
              <span className="nav-user">Hello, {user.name}</span>
              <button onClick={handleLogout} className="nav-btn">Logout</button>
            </>
          ) : (
            <>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/login" className="nav-btn">Login</Link>
              <Link to="/register" className="nav-btn">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
