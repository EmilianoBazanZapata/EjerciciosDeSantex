/*
    4. Realizar un script que escriba una pirámide del 1 al 6 de la siguiente forma:
  1
  12
  123
  1234
  12345
  123456
*/

function pirámide2() {
    let n = 1;
    let resultado = '';
    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= i; j++) {
            resultado += n;
        }
        console.log(resultado);
        resultado = '';
        n++;
    }
}

pirámide2();