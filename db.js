const mongoose = require("mongoose");
require('dotenv').config()

const url = process.env.db_uri;

mongoose.connect(url)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. ${err}`);
    })
