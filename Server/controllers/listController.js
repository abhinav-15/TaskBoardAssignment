// controllers/listController.js
const List = require('../models/list');

exports.createList = async (req, res) => {
  try {
    const { name } = req.body;
    const newList = await List.create({ name });
    res.status(201).json({ success: true, list: newList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Other list-related controllers can be added as needed
