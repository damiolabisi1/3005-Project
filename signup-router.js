const express = require('express');
const config = require('./config.js');
const fs = require('fs');
const path = require('path');
const app = express();
let router = express.Router();

app.use(express.json()); // body-parser middleware

module.exports = router;