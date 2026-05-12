const express = require('express');
const axios = require('axios');
const dayjs = require('dayjs');
const { v4: uuidv4 } = require('uuid');
const chalk = require('chalk');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    id: uuidv4(),
    timestamp: dayjs().toISOString(),
    message: chalk.green('Hello from branch-based-automerge test repo'),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
