const { PePe } = require('../models');

// Controller for registering a new PePe
exports.registerPePe = async (req, res) => {
  try {
    const { name, score } = req.body;

    // Create a new PePe instance
    const pepe = await PePe.create({
      name,
      score,
    });

    res.status(201).json({ pepe });
  } catch (error) {
    console.error('Error registering PePe:', error);
    res.status(500).json({ error: 'Failed to register PePe' });
  }
};

// Controller for retrieving a specific PePe
exports.getPePe = async (req, res) => {
  try {
    const { pepeId } = req.params;

    // Retrieve the PePe from the database
    const pepe = await PePe.findOne({ where: { id: pepeId } });

    if (!pepe) {
      return res.status(404).json({ error: 'PePe not found' });
    }

    res.status(200).json({ pepe });
  } catch (error) {
    console.error('Error retrieving PePe:', error);
    res.status(500).json({ error: 'Failed to retrieve PePe' });
  }
};
