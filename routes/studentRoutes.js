const express = require('express');
const { getStudents, getStudentById, updateStudent, deleteStudent, addOrUpdateMark } = require('../controllers/studentController');
const router = express.Router();
const { authenticateAdmin, authenticateUser } = require('../middlewares/authMiddleware');

router.get('/', authenticateAdmin, getStudents);
router.get('/:id', authenticateUser, getStudentById);
router.put('/:id', authenticateAdmin, updateStudent);
router.delete('/:id', authenticateAdmin, deleteStudent);
router.post('/marks', authenticateAdmin, addOrUpdateMark);

module.exports = router;
