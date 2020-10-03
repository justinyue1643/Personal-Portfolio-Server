const mongoose = require('mongoose')
const express = require('express')
const blogRoute = require('./routes/blogRoute');

require('dotenv').config({path: '.env'})

const app = express()
app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
            .catch(err => console.log(err));

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connection to MongoDB successful');
})

app.use('/blog', blogRoute);



