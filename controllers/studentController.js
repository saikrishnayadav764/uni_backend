const Student = require('../models/Student');
const Mark = require('../models/Mark');
const Subject = require('../models/Subject');

Student.hasMany(Mark, { as: 'marks', foreignKey: 'studentId' });
exports.getStudents = async (req, res) => {
   const students = await Student.findAll({ include: ['field', { model: Mark, as: 'marks' }] });
   res.json(students);
};

exports.getStudentById = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findByPk(id, { include: ['field', 'marks'] });
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: 'Student not found' });
  }
};



exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  const { username, enrollmentYear, fieldId } = req.body;
  const student = await Student.findByPk(id);
  if (student) {
    student.username = username;
    student.enrollmentYear = enrollmentYear;
    student.fieldId = fieldId;
    await student.save();
    res.json(student);
  } else {
    res.status(404).json({ message: 'Student not found' });
  }
};

exports.deleteStudent = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findByPk(id);
  if (student) {
    await student.destroy();
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Student not found' });
  }
};

exports.addOrUpdateMark = async (req, res) => {
  const { studentId, subjectId, marks } = req.body;
  const mark = await Mark.findOne({ where: { studentId, subjectId } });

  if (mark) {
    mark.marks = marks;
    await mark.save();
    res.json(mark);
  } else {
    const newMark = await Mark.create({ studentId, subjectId, marks });
    res.status(201).json(newMark);
  }
};
