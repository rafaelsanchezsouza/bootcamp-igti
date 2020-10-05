var express = require('express');
var app = express();
// const cors = require('cors');

app.get('/', function (request, response) {
  // var corsOptions = {
  //   origin:
  //     'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo',
  // };
  var corsOptions = response.json({ corsOptions: corsOptions });
});

app.listen(3001, function started() {
  console.log('Servidor iniciado na porta 3001');
});

// console.log(getRandomNumber());
// console.log(getRandomNumber());
// console.log(getRandomNumber());
// console.log(getRandomNumber());
// console.log(getRandomNumber());
// console.log(getRandomNumber());
