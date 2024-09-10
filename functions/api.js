const express = require('express');
const fs = require('fs');
const path = require('path');
const serverless = require('serverless-http');

const app = express();

// Load data from JSON file
const dataPath = path.join(__dirname, '../data.json');
const getData = () => {
  const rawData = fs.readFileSync(dataPath);
  return JSON.parse(rawData);
};

// Define a route to get user info by ID
app.get('/user-info/:id', (req, res) => {
  const { id } = req.params;
  const data = getData();

  const user = data.find(user => user.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

module.exports.handler = serverless(app);
