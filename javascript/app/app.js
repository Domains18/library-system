const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const colors = require('colors');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/', async (req, res) => {
    res.send('Hello World');
});


app.listen(PORT, () => console.log(`Server started on port ${PORT}`.yellow.bold));
