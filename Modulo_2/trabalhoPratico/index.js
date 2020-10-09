import { promises as fs, readFileSync } from 'fs';

const estado = 'MG';
var cidades = 0;
var estados = 0;
readFile();
// readFile().then(([cidades, estados]) => {
//   createStateFile(cidades, estados);
// });

createStateFile(cidades,estados)

// countCities(estado);
// countCitiesName(estado).then((result) => {
//   console.log('Máx: ' + result);
// });

async function readFile() {
  try {
    cidades = JSON.parse(await fs.readFile('./json/Cidades.json'));
    estados = JSON.parse(await fs.readFile('./json/Estados.json'));
    // console.log(estados);
    // return [cidades, estados];
  } catch {
    console.log(err);
  }
}
async function createStateFile(cidades, estados) {
  try {
    console.log('createStateFile()');
    //read data
    var estado = [];
    console.log('Início');

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

async function countCities(cidades, estados, estado) {
  const uf = JSON.parse(await fs.readFile(estado + '.json'));

  console.log('Cidades no Estado de ' + estado + ': ' + uf.length);
}

async function countCitiesName(cidades, estados, estado) {
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
  return max;
  // console.log('Máx: ' + max);
  // console.log('Min: ' + min);
  // console.log('Cidades no Estado de ' + estado + ': ' + uf.length);
}
