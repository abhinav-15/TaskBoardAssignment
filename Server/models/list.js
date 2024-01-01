// models/list.js
const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
  // Add other fields as needed
});

const List = mongoose.model('List', listSchema);

module.exports = List;
