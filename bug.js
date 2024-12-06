const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  // Accessing req.body directly without validation can lead to unexpected behavior
  const newUser = req.body;
  // ... further logic to process newUser ...
  res.status(201).json({ message: 'User created' });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});