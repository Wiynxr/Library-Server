const { Router } = require("express");
const { studentsController } = require('../controllers/Students.controller.js')
const router = Router();

router.get("/students", studentsController.getStudents)

router.post("/students", studentsController.postStudents);

router.delete("/students/:id", studentsController.deleteStudents)

router.patch("/students/:id", studentsController.pathStudents)

module.exports = router;
