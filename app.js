const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, World!', app: 'My Express App' });
});

app.post('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'POST request received', app: 'My Express App' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
