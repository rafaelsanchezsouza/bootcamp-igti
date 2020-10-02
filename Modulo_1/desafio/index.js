var express = require('express');
var app = express();

function getNumerosMegasena() {
  var numbers = [];
  while (numbers.length < 6) {
    var number = getRandomNumber();

    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }
  return numbers;
  // return [1, 2, 3, 4, 5, 6];
}

function getRandomNumber() {
  return Math.max(1, Math.ceil(Math.random() * 60));
}

app.get('/', function (request, response) {
  var numbers = getNumerosMegasena();
  response.json({ numbers: numbers });
});

app.listen(3001, function started() {
  console.log('Servidor iniciado na porta 3001');
});

console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
