import { promises as fs } from 'fs';

// init();
writeReadJson();

// async function init() {
//   try {
//     await fs.writeFile('teste.txt', 'bla bla bla');
//     await fs.appendFile('teste.txt', '\n append file \n');
//     // const data = await fs.readFile('teste.txt', 'utf-8');
//     // console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

async function writeReadJson() {
  try {
    const arrayCarros = ['Gol', 'Palio', 'Uno'];
    const obj = {
      carros: arrayCarros,
    };
    // console.log(obj);
    await fs.writeFile('teste.json', JSON.stringify(obj));

    const data = JSON.parse(await fs.readFile('teste.json'));
  } catch (err) {
    console.log(err);
  }
}
