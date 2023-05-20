const sequelize = require('./database');
const PePe = require('../models/PePe');

// Sync models with the database
(async () => {
  try {
    await sequelize.sync();
    console.log('Models synchronized with the database');
  } catch (error) {
    console.error('Error synchronizing models with the database:', error);
  }
})();

module.exports = {
  PePe,
};
