const express = require("express");
const router = express.Router();
const taskcontroller = require("./../controllers/taskController");

router.route("/getalltask").get(taskcontroller.getAllTask);
router.route("/createtask").post(taskcontroller.createTask);
router.route("/gettask/:id").get(taskcontroller.getTask)
router.route("/deletetask/:id").get(taskcontroller.DeleteTask)
router.route("/updatetask/:id").post(taskcontroller.updateTask)


module.exports = router;
