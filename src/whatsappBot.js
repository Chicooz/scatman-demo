// Basic WhatsApp messages bot
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const message = req.body.message;
  console.log('Received message:', message);
  // Here you would handle the message and respond accordingly
  res.send('Message received');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`WhatsApp bot listening on port ${PORT}`);
});