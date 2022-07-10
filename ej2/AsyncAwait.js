const axios = require('axios');
console.log("Se va a hacer la request");

const promise=(data)=>new Promise((resolve,reject)=>{
    console.log('Quiero hacer algo con la data que me dio: '+ data.name)
    resolve();
})

const request = async () => {
    try{
        const resultado = await axios.get ('https://pokeapi.co/api/v2/pokemon/ditto');
        console.log(resultado.data.name);
        await promise(resultado.data);
        console.log("finalizado");
    }catch(error){
        console.error(error);
    }finally{
        console.log ("finally");
    }
    console.log ("siempre con los finales");
}