const Student = require("../models/Student.model");

module.exports.studentsController = {
  getStudents: (req, res) => {
    Student.find({}).then((data) => {
      res.json(data);
    });
  },

  postStudents: (req, res) => {
    Student.create({
      name: req.body.name,
      phone: req.body.phone,
      age: req.body.age,
    }).then(() => {
      res.json("Студент успешно добавлен!");
    });
  },

  deleteStudents: (req, res) => {
    Student.findOneAndRemove(req.params.id).then(() => {
      res.json(`Студент с id ${id} успешно удален!`);
    });
  },

  pathStudents: (req, res) => {
    try {
      Student.findByIdAndUpdate(req.params.id, { name: req.body.name });
      res.json("Студент изменен");
    } catch (error) {
      console.log(error);
    }
  },
};
