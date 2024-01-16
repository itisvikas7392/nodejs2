const http = require('http');
const PORT = 3000;
const cheerio = require('cheerio');
const axios = require('axios');
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const app = express();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hellohhh World!');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
