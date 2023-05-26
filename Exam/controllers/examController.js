const Exam = require('../models/Exam');

const examController = {
  createExam: async (req, res) => {
    try {
      const { subject, startTime, endTime, duration } = req.body;

      const newExam = new Exam({
        subject,
        startTime,
        endTime,
        duration,
      });

      const savedExam = await newExam.save();
      res.json(savedExam);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Failed to create exam.' });
    }
  },
};

module.exports = examController;
