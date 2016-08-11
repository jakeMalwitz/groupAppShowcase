var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/*', function(req, res) {

})
app.set('port', process.env.PORT || 3000);

app.listen(app.get)
