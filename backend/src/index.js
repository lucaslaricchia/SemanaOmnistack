const express = require('../node_modules/express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(routes);


mongoose.connect('mongodb+srv://lucaslaricchia:123654@clusterinicial-jrvdj.mongodb.net/test?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});


//teste



app.listen(3333);
