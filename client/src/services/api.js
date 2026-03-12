import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api'
});

// Add token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Course APIs
export const getCourses = () => API.get('/courses');
export const getCourse = (id) => API.get(`/courses/${id}`);
export const createCourse = (data) => API.post('/courses', data);
export const enrollCourse = (id) => API.post(`/courses/${id}/enroll`);

// Quiz APIs
export const getQuizzes = () => API.get('/quizzes');
export const getQuiz = (id) => API.get(`/quizzes/${id}`);
export const createQuiz = (data) => API.post('/quizzes', data);
export const submitQuiz = (data) => API.post('/quizzes/submit', data);
export const getUserResults = () => API.get('/quizzes/results');

export default API;
