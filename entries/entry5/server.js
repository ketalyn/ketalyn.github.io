// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/mural', { useNewUrlParser: true, useUnifiedTopology: true });

const Message = mongoose.model('Message', {
  text: String,
  posX: Number,
  posY: Number,
});

app.use(bodyParser.json());

app.post('/api/messages', async (req, res) => {
  const { text, posX, posY } = req.body;

  const message = new Message({ text, posX, posY });

  try {
    await message.save();
    res.status(201).json({ message: 'Message saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
