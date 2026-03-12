const express = require('express');
const {
  getQuizzes,
  getQuiz,
  createQuiz,
  submitQuiz,
  getUserResults
} = require('../controllers/quizController');
const { protect, authorize } = require('../middleware/auth');
const { quizLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

router.route('/')
  .get(protect, getQuizzes)
  .post(protect, authorize('instructor', 'admin'), createQuiz);

router.get('/results', protect, getUserResults);
router.post('/submit', protect, quizLimiter, submitQuiz); // Rate limit quiz submissions
router.get('/:id', protect, getQuiz);

module.exports = router;
