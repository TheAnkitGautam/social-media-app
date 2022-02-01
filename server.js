const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const keys = require('./secrets');
const app = express();


// Middlewares
app.use(express.json());
// app.use(morgan('common'));



mongoose
    .connect(keys.MONGO_URL, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Routes 
app.use('/auth', require('./routes/auth'));

app.get('/', (req, res) => {
    res.send('Hello World');
})















const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
    console.log(`Server is running on port ${PORT}`);
})