const sequelize = require('../config/db');
const Field = require('../models/Field');
const Student = require('../models/Student');
const Subject = require('../models/Subject');
const Mark = require('../models/Mark');
const bcrypt = require('bcrypt');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const fields = await Field.bulkCreate([
    { name: 'Engineering' },
    { name: 'Arts' },
    { name: 'Commerce' },
  ]);

const saltRounds = 10;

const hashedPassword1 = bcrypt.hashSync('hashedpassword1', saltRounds);
const hashedPassword2 = bcrypt.hashSync('hashedpassword2', saltRounds);

  const students = await Student.bulkCreate([
    { username: 'john', password: hashedPassword1, enrollmentYear: 2021, fieldId: fields[0].id },
    { username: 'jane', password: hashedPassword2, enrollmentYear: 2022, fieldId: fields[1].id },
  ]);

  const subjects = await Subject.bulkCreate([
    { name: 'Maths', fieldId: fields[0].id },
    { name: 'Physics', fieldId: fields[0].id },
    { name: 'History', fieldId: fields[1].id },
  ]);

  await Mark.bulkCreate([
    { studentId: students[0].id, subjectId: subjects[0].id, marks: 85 },
    { studentId: students[0].id, subjectId: subjects[1].id, marks: 90 },
    { studentId: students[1].id, subjectId: subjects[2].id, marks: 88 },
  ]);

  console.log('Database seeded!');
};

seedDatabase().catch(error => {
  console.error('Error seeding database:', error);
  process.exit(1);
});
