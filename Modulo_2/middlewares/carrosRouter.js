import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.method + '/carros' + req.path);
  res.send(req.method + '/carros' + req.path);
});

router.get('/precos', (req, res) => {
  console.log('GET /carros/precos');
  res.send('GET /carros/precos');
});

export default router;
