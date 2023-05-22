const express = require('express');
const app = express();
const port = 3001; // Change to the desired port number

app.post('/api/delay', (req, res) => {
  const delay = req.body.delay;
  setTimeout(() => {
    res.json({ message: `Response after ${delay} second(s)` });
  }, delay * 1000);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
