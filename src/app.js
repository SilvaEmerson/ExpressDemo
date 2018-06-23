const express = require('express');
const [countNames, books] = require('./scripts');
const app = express();

app.get('/', (request, response) => response.send(__dirname));
app.get('/namesnumber', (request, response) => response.send(countNames));
app.get('/books', (request, response) => response.send(books));
module.exports = app;
