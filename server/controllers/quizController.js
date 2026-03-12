const Quiz = require('../models/Quiz');
const QuizResult = require('../models/QuizResult');

// Get all quizzes
exports.getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find().populate('creator', 'name').populate('course', 'title');
    res.json({ success: true, count: quizzes.length, quizzes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single quiz
exports.getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id).populate('creator', 'name').populate('course', 'title');
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.json({ success: true, quiz });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create quiz
exports.createQuiz = async (req, res) => {
  try {
    req.body.creator = req.user.id;
    const quiz = await Quiz.create(req.body);
    res.status(201).json({ success: true, quiz });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Submit quiz
exports.submitQuiz = async (req, res) => {
  try {
    const { quizId, answers } = req.body;
    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    let score = 0;
    const resultAnswers = [];

    quiz.questions.forEach((question, index) => {
      const userAnswer = answers[index];
      const isCorrect = userAnswer === question.correctAnswer;
      if (isCorrect) score++;

      resultAnswers.push({
        questionId: question._id,
        selectedAnswer: userAnswer,
        isCorrect
      });
    });

    const quizResult = await QuizResult.create({
      user: req.user.id,
      quiz: quizId,
      score,
      totalQuestions: quiz.questions.length,
      answers: resultAnswers
    });

    res.json({ success: true, score, totalQuestions: quiz.questions.length, result: quizResult });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user quiz results
exports.getUserResults = async (req, res) => {
  try {
    const results = await QuizResult.find({ user: req.user.id })
      .populate('quiz', 'title')
      .sort('-completedAt');
    res.json({ success: true, count: results.length, results });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
