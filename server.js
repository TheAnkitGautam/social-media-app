const express = require('express');
const mongoose = require('mongoose');
const app = express();




















const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
    console.log(`Server is running on port ${PORT}`);
})