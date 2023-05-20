const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// Configure routes
app.use('/api', require('./routes/api'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
