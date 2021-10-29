const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const notiRoute = require('./routes/noti');

app.use(bodyParser.json());

app.use("/noti",notiRoute);


module.exports = app;