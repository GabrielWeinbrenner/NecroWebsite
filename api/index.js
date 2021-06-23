var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
var guildsRoutes = require('./routes/guilds.js');

// Access body request of posts
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/guilds', guildsRoutes);

app.listen(3000, function () {
    console.log("App run");
});
