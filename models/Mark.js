const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Student = require('./Student');
const Subject = require('./Subject');

const Mark = sequelize.define('Mark', {
  studentId: {
    type: DataTypes.INTEGER,
    references: {
      model: Student,
      key: 'id',
    },
  },
  subjectId: {
    type: DataTypes.INTEGER,
    references: {
      model: Subject,
      key: 'id',
    },
  },
  marks: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Mark;
