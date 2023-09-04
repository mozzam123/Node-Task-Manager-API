const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  dueDate: {
    type: Date,
  },
  priority: {
    type: String,
    enum: ["high", "medium", "low"],
    default: "low"
  },
  status: {
    type: String,
    enum: ["pending", "running", "completed"],
    default: "pending",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;


  // createdBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   // ref: 'User' // If you have a User model
  // },