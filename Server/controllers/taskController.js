// controllers/taskController.js
const Task = require('../models/task');

// Example function to create a new task
const createTask = async (req, res) => {
  try {
    const { title, description, listId } = req.body;

    // Check if the required fields are provided
    if (!title || !listId) {
      return res.status(400).json({ error: 'Title and listId are required fields' });
    }

    const newTask = await Task.create({
      title,
      description,
      listId,
    });

    res.status(201).json(newTask);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Example function to update task completion status
const updateTaskStatus = async (req, res) => {
  try {
    const { taskId, completed } = req.body;

    // Check if the required fields are provided
    if (!taskId || completed === undefined) {
      return res.status(400).json({ error: 'taskId and completed are required fields' });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { completed },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error('Error updating task status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Add other CRUD operations as needed

module.exports = {
  createTask,
  updateTaskStatus,
  // Add other exported functions
};
