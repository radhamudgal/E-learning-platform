import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getQuizzes } from '../services/api';
import './Quizzes.css';

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadQuizzes();
  }, []);

  const loadQuizzes = async () => {
    try {
      const res = await getQuizzes();
      setQuizzes(res.data.quizzes);
    } catch (error) {
      console.error('Error loading quizzes:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading quizzes...</div>;

  return (
    <div className="quizzes-page">
      <h1>Available Quizzes</h1>
      <div className="quizzes-grid">
        {quizzes.map(quiz => (
          <div key={quiz._id} className="quiz-card">
            <h3>{quiz.title}</h3>
            <p>{quiz.questions.length} Questions</p>
            <p className="quiz-creator">Created by: {quiz.creator?.name}</p>
            <button 
              onClick={() => navigate(`/quiz/${quiz._id}`)} 
              className="take-quiz-btn"
            >
              Take Quiz
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quizzes;
