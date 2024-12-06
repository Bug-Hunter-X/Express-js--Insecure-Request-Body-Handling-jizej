const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  // Validate request body
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  // Sanitize inputs
  const sanitizedName = sanitize(name);
  const sanitizedEmail = sanitize(email);
  // ... further logic to process sanitized data ...
  res.status(201).json({ message: 'User created' });
});

function sanitize(input) {
  // Implement your sanitization logic here
  // e.g., using a library like DOMPurify for HTML sanitization
  return input;
}

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});