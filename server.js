const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const fieldRoutes = require('./routes/fieldRoutes');
const studentRoutes = require('./routes/studentRoutes');
const subjectRoutes = require('./routes/subjectRoutes');
const cors = require('cors');

const app = express();
require('dotenv').config();
app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/fields', fieldRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/subjects', subjectRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
