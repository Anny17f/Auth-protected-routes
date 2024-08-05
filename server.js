const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const app = express();
const port = 3000;
// require('dotenv').config();


app.use(express.json());
app.use('/api/auth', authRoutes);

mongoose.connect('mongodb+srv://annyfaruq17:067ru8RPfRsFEHtU@nodeexpressprojects.bq7wska.mongodb.net/JOB-API?retryWrites=true&w=majority', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
