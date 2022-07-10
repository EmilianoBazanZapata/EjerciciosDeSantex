const axios = require('axios');

const promise = (data) => new Promise((resolve, reject) => {
    console.log('Quiero hacer algo con la data que me dio: '+data.name)
    resolve();
})
console.log("Se va a hacer la request");

axios
    .get('https://pokeapi.co/api/v2/pokemon/ditto')
    .them(resultado => {
        promise(resultado.data).then{() => {

        }
    });

const request=async () => {
    try{
        const resultado = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
        console.log(resultado.data.name);
        await promise(resultado.data);
        console.log('Se termino de hacer la request');
    }catch(error){
        console.log('ERROR: ' + error);
    }finally{
        
    }


