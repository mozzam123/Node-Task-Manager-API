const Task = require("./../models/taskModel");

exports.getAllTask = async (req, res) => {
  const allTask = await Task.find();
  res.json({ Tasks: allTask });
};

exports.createTask = async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const priority = req.body.priority;

  const newTask = new Task({
    title: title,
    description: description,
    priority: priority,
  });

  const savedTask = await newTask.save();
  res.status(200).json({ message: "got it", savedTask });
};

exports.getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task) {
      res.status(200).json({ status: "success", task });
    }
  } catch (error) {
    res.status(404).json({ status: "failed", message: "Task not found" });
  }
};

exports.DeleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (task) {
      res.status(200).json({ status: "success", message: "Task deleted" });
    }
  } catch (error) {
    res.status(404).json({ status: "error", message: "Task cannot be delete" });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      task,
    });
  } catch (error) {
    res.status(404).json({ status: "failed", message: "Error occured" });
  }
};


