import React, { useState, useEffect } from 'react';
import { getUserResults } from '../services/api';
import './Performance.css';

const Performance = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadResults();
  }, []);

  const loadResults = async () => {
    try {
      const res = await getUserResults();
      setResults(res.data.results);
    } catch (error) {
      console.error('Error loading results:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculatePercentage = (score, total) => {
    return ((score / total) * 100).toFixed(1);
  };

  if (loading) return <div className="loading">Loading performance...</div>;

  return (
    <div className="performance-page">
      <h1>📊 Your Performance</h1>
      
      {results.length === 0 ? (
        <div className="no-results">
          <p>No quiz attempts yet. Start taking quizzes to track your progress!</p>
        </div>
      ) : (
        <div className="results-grid">
          {results.map((result, index) => (
            <div key={result._id} className="result-card">
              <div className="result-header">
                <h3>{result.quiz?.title || 'Quiz'}</h3>
                <span className="result-date">
                  {new Date(result.completedAt).toLocaleDateString()}
                </span>
              </div>
              <div className="result-score">
                <div className="score-circle">
                  <span className="score-value">
                    {calculatePercentage(result.score, result.totalQuestions)}%
                  </span>
                </div>
                <p className="score-text">
                  {result.score} / {result.totalQuestions} correct
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Performance;
