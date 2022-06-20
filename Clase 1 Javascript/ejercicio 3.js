/*
    3. Realizar un script que escriba una pirámide del 1 al 6 de la siguiente forma:
  1
  22
  333
  4444
  55555
  666666
*/

function pirámide() {
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

pirámide();