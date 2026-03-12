import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { createQuiz } from '../services/api';
import { AuthContext } from '../context/AuthContext';
import './CreateQuiz.css';

const CreateQuiz = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([
    { question: '', optionA: '', optionB: '', optionC: '', optionD: '', correctAnswer: 'A' }
  ]);
  const [error, setError] = useState('');

  const addQuestion = () => {
    setQuestions([...questions, { 
      question: '', optionA: '', optionB: '', optionC: '', optionD: '', correctAnswer: 'A' 
    }]);
  };

  const updateQuestion = (index, field, value) => {
    const updated = [...questions];
    updated[index][field] = value;
    setQuestions(updated);
  };

  const removeQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createQuiz({ title, questions });
      alert('Quiz created successfully!');
      navigate('/quizzes');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create quiz');
    }
  };

  if (user?.role !== 'instructor' && user?.role !== 'admin') {
    return <div className="error-page">Only instructors can create quizzes</div>;
  }

  return (
    <div className="create-quiz-page">
      <div className="create-quiz-box">
        <h2>📝 Create New Quiz</h2>
        {error && <div className="error-msg">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Quiz Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="quiz-title-input"
          />

          {questions.map((q, index) => (
            <div key={index} className="question-block">
              <div className="question-header">
                <h4>Question {index + 1}</h4>
                {questions.length > 1 && (
                  <button type="button" onClick={() => removeQuestion(index)} className="remove-btn">
                    ✕
                  </button>
                )}
              </div>
              <input
                type="text"
                placeholder="Enter question"
                value={q.question}
                onChange={(e) => updateQuestion(index, 'question', e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Option A"
                value={q.optionA}
                onChange={(e) => updateQuestion(index, 'optionA', e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Option B"
                value={q.optionB}
                onChange={(e) => updateQuestion(index, 'optionB', e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Option C"
                value={q.optionC}
                onChange={(e) => updateQuestion(index, 'optionC', e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Option D"
                value={q.optionD}
                onChange={(e) => updateQuestion(index, 'optionD', e.target.value)}
                required
              />
              <select
                value={q.correctAnswer}
                onChange={(e) => updateQuestion(index, 'correctAnswer', e.target.value)}
                required
              >
                <option value="A">Correct Answer: A</option>
                <option value="B">Correct Answer: B</option>
                <option value="C">Correct Answer: C</option>
                <option value="D">Correct Answer: D</option>
              </select>
            </div>
          ))}

          <button type="button" onClick={addQuestion} className="add-question-btn">
            + Add Question
          </button>
          <button type="submit" className="submit-btn">Create Quiz</button>
        </form>
      </div>
    </div>
  );
};

export default CreateQuiz;
