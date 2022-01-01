const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/comics', require('./routes/comics.routes'));

module.exports = { app };
