const promise = () => new Promise((resolve, reject) => {
    setTimeout (() =>{
        resolve('Hola Mundo');
    },1000);
});

console.log('arr')

promise().them((data) => {
    console.log(data);
})
.them((data) => {
    console.log(data);
})
