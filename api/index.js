var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
var todosRoutes = require('./routes/todos');

// Access body request of posts
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/todos', todosRoutes);

app.listen(3000, function () {
    console.log("App run");
});