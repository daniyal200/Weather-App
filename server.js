const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const weatherRoutes = require('./backend/routes/weatherRoutes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('api/weather',weatherRoutes)


app.listen(port, () => console.log(`Server started on port ${port}`));