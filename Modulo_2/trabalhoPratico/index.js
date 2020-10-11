import { promises as fs, readFileSync } from 'fs';

loop();

async function loop() {
  const estado = 'MG';
  const cidades = JSON.parse(await fs.readFile('./json/Cidades.json'));
  const estados = JSON.parse(await fs.readFile('./json/Estados.json'));

  // chama funcao que cria estados
  createStateFile(cidades, estados);
  countCities(estado);
  countCitiesName(estado);
}

// // Opção com .then

// readFile().then(([cidades, estados]) => {
//   console.log(cidades);
//   createStateFile(cidades, estados);
// });

// async function readFile() {
//   try {
//     const cidades = JSON.parse(await fs.readFile('./json/Cidades.json'));
//     const estados = JSON.parse(await fs.readFile('./json/Estados.json'));
//     return [cidades, estados];
//   } catch {
//     console.log(err);
//   }
// }
async function createStateFile(cidades, estados) {
  try {
    console.log(cidades);
    //read data
    var estado = [];

    var i = 0;
    var j = 0;

    while (i < estados.length) {
      while (j < cidades.length) {
        if (estados[i]['ID'] === cidades[j]['Estado']) {
          estado.push(cidades[j]['Nome']);
        }
        j++;
      }
      await fs.writeFile(
        './json/' + estados[i]['Sigla'] + '.json',
        JSON.stringify(estado)
      );
      estado = [];
      i++;
      j = 0;
    }
  } catch {
    console.log(err);
  }
}

async function countCities(estado) {
  const uf = JSON.parse(await fs.readFile(`./json/${estado}.json`));

  console.log('Cidades no Estado de ' + estado + ': ' + uf.length);
}

async function countCitiesName(estado) {
  var nomeCidade = [];
  const uf = JSON.parse(await fs.readFile('./json/' + estado + '.json'));
  var max = 0;
  var min = 110;
  var novo = 0;
  for (var i = 0; i < uf.length; i++) {
    console.log(uf[i]);
    console.log(uf[i].length);
    novo = uf[i].length;

    if (max < novo) {
      max = novo;
    }
    if (min > novo) {
      min = novo;
    }
  }
  console.log('Máx: ' + max);
  console.log('Min: ' + min);
}
