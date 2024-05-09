const express = require('express');
const QRCode = require('qrcode');
const Jimp = require('jimp');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

app.get('/api/generate', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).send('Missing URL parameter');

  try {
    const qr = await QRCode.toDataURL(url);
    res.send(qr);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(3000, () => console.log('Listening on port 3000'));