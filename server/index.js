require('dotenv').config();
const app = require('express')();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const request = require('request');
const routes = require('./routes/routes.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/', routes);


let port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
