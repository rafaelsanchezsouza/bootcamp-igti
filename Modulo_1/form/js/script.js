window.addEventListener('load', start);

function start() {
  console.log('Aula 04 - Formulários');
  console.log('Página Carregada');

  var nameInput = document.querySelector('#nameInput');
  nameInput.addEventListener('keyup', countName);

  var form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit);
}

function countName(event) {
  var count = 1;
  console.log(event);
  var span = document.querySelector('#nameLength');
  var count = event.target.value.length;
  // span.textContent = 'Contador de Caracteres';
  span.textContent = count;
}

function preventSubmit(event) {
  event.preventDefault();

  var nameInput = document.querySelector('#nameInput');
  alert('Hello, ' + nameInput.value + '!!!!!');
}
