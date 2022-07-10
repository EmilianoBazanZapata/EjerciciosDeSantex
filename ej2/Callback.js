const axios = require('axios');

const promise = (data) => new Promise((resolve, reject) => {
    console.log('Quiero hacer algo con la data que me dio: '+ data.name)
    resolve();
})
console.log("Se va a hacer la request");

axios
    .get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(resultado => {
        console.log(resultado.data);
        promise(resultado.data).then(() => {
            console.log("finalizado")
        })
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("siempre con los finales")
    });
console.log ("quiero hacer algo con la data que me dio ditto");



