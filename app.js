const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const notiRoute = require('./routes/noti');

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/noti",notiRoute);


module.exports = app;