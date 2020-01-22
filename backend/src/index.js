const express = require('../node_modules/express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://lucaslaricchia:123654@cluster0-jrvdj.mongodb.net/week10?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});


//teste



app.listen(3333);
