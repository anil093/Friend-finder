var express =  require('express');
var app = express();
var path = require('path');
var htmlRoutes = require('./routing/htmlRoutes.js');

var port = 3000;
var connection;


app.listen(port, () =>
console.log(`connected on port: ${port}`));

app.get('/',(request, response) => {
    response.sendFile(path.resolve('./public/home.html'));
})
app.get('/survey',(request, response) => {
    response.sendFile(path.resolve('./public/survey.html'));
}) 



htmlRoutes(app);