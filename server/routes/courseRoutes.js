const express = require('express');
const {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  enrollCourse
} = require('../controllers/courseController');
const { protect, authorize } = require('../middleware/auth');
const { cacheMiddleware } = require('../middleware/cache');

const router = express.Router();

// Cache course listings for 5 minutes
router.route('/')
  .get(cacheMiddleware(5 * 60 * 1000), getCourses)
  .post(protect, authorize('instructor', 'admin'), createCourse);

// Cache individual course for 5 minutes
router.route('/:id')
  .get(cacheMiddleware(5 * 60 * 1000), getCourse)
  .put(protect, authorize('instructor', 'admin'), updateCourse)
  .delete(protect, authorize('instructor', 'admin'), deleteCourse);

router.post('/:id/enroll', protect, enrollCourse);

module.exports = router;
