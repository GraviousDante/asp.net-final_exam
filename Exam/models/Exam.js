const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  subject: String,
  startTime: Date,
  endTime: Date,
  duration: Number,
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
