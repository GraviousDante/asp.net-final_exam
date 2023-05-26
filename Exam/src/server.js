const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:5000/exams', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use('/exams', require('./routes/examRoutes'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
