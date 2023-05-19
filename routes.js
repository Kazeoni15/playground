const express = require('express');
const router = express.Router();

router.post('/api/data', (req, res) => {
  // Extract data from the request body
  const { name, email } = req.body;

  // Perform any necessary operations with the data
  // For example, you can save it to a database
console.log(name, email)
  // Send a response back to the client
  res.status(200).json({ message: 'Data received successfully!' });
});

module.exports = router;
