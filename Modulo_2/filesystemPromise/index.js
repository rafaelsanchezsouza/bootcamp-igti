import { promises as fs } from 'fs';

fs.writeFile('teste.txt', 'bla bla bla').then(() => {
  fs.appendFile('teste.txt', '\n append file \n')
    .then(() => {
      fs.readFile('teste.txt', 'utf-8')
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    })
    .catch((err) => {
      console.log(err);
    });
});
