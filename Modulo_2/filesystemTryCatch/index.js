import { promises as fs } from 'fs';

init();

async function init() {
  try {
    await fs.writeFile('teste.txt', 'bla bla bla');
    await fs.appendFile('teste.txt', '\n append file \n');
    const data = await fs.readFile('teste.txt', 'utf-8');
  } catch (err) {
    console.log(err);
  }
}
