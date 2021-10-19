// @ts-check

/* eslint-disable no-console */

const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.send(`Hello, Express!`);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`This Server is listening PORT:${PORT}`);
});
