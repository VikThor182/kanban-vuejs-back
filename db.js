const mongoose = require("mongoose");

const url = 'mongodb+srv://vikthor182:JenVicSolMani49@cluster0.8ckqtbw.mongodb.net/tasks?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(url)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. ${err}`);
    })

