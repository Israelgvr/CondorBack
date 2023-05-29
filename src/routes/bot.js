
const express = require('express');

const app = express.Router();
const { Telegraf } = require('telegraf');
const bot = new Telegraf('6057739376:AAFXAcKGNSGNnc7ZA-4tD6NvAxa5OhbzhGY');

// Middleware to parse JSON request body


// Handler for POST requests
app.post('/messages', (req, res) => {
  const message = req.body.message;
  const location = req.body.location;
  
  // Send the message to Telegram using Telegraf
  bot.telegram.sendMessage('5150042972', message,location)
    .then(() => res.send('Message sent successfully'))
    .catch(() => res.status(500).send('Error sending message'));
});

module.exports =  app ;
