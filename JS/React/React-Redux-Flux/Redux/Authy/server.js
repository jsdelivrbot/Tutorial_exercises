//Import server modules
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes');

//DB setup
mongoose.connect('mongodb://127.0.0.1:27017/testRTC');
const db = mongoose.connection;
db.on('open', () => console.log('DB running') );
db.on('error', (err) => console.log(`DB error::${err}`) );
db.on('disconnected', () => console.log('disconnected') );

//Setup server middleware
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'})); 

//Server routes
routes(app);

//Run server
const server = http.createServer(app)
app.listen( 3000, () => {
    console.log('Server listening on port 3000')
})