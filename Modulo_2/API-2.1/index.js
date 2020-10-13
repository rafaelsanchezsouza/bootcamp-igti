import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World 2!');
});

app.post('/', (req, res) => {
  res.send('Hello World POST!');
});

app.get('/Requisition+', (req, res) => {
  res.send('Requisição: ' + req.path);
});

app.get('/TesteQ', (req, res) => {
  res.send(req.query);
});

app.post('/teste*coisa', (req, res) => {
  res.send(req.body);
  console.log(req.body);
});

app.listen(3000, () => {
  console.log('API Started!');
});
