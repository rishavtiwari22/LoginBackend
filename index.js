const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());

require('dotenv').config();
const mongoString = process.env.DATABASE_URL;

app.listen(3001, () => {
  console.log(`Server started at 3001`);
});

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


app.use('/api', routes)