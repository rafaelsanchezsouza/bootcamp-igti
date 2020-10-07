import fs from 'fs';

fs.writeFile('teste.txt', 'bla bla bla', function (err) {
  if (err) {
    console.log(err);
  }
  // else console.log('arquivo escrito com sucesso');
  else {
    fs.appendFile('teste.txt', '\n teste append file \n', function (err) {
      fs.readFile('teste.txt', 'utf-8', function (err, data) {
        if (err) {
          console.log(err);
        } else console.log(data);
      });
    });
  }
});
