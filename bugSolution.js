const express = require('express');
const app = express();

app.use(express.json({ limit: '50mb' })); //Increased limit to handle larger requests
app.use(express.urlencoded({ extended: true })); // Enable urlencoded body parsing

app.post('/user', (req, res) => {
  console.log(req.body); // Check if the body is correctly parsed
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({ error: 'Request body is empty' });
  }
  res.send('Success!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});