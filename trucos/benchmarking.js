// console.time('todo');
// let suma = 0;
// console.time('bucle');
// for (let i=0; i< 1000000000; i++){
//     suma += 1;
// }
// console.timeEnd('bucle');
// //--


// let suma2 = 0;
// console.time('bucle2');
// for (let j=0; j< 10000000; j++){
//     suma2 += 1;
// }
// console.timeEnd('bucle2');

// console.time('asincrono');
// console.log('Empieza el proceso asincrono');
// asincrona()
//     .then(()=>{
//         console.timeEnd('asincrono');
//     })

// console.timeEnd('todo');

// //---

// function asincrona(){
//     return new Promise ((resolve) =>{
//         setTimeout(function () {
//             console.log('termina el proceso asíncrono,');
//             resolve();
//         })
//     })
// }

console.time('todo');
let suma = 0;

console.time('bucle1');
for (let i = 0; i < 1000000000; i++) {
    suma++;
}
console.timeEnd('bucle1');

let suma2 = 0;
console.time('bucle2');
for (let i = 0; i < 10000000000; i++) {
    suma2++;
}
console.timeEnd('bucle2');

console.time('asincrona');
console.log('inicia asincrono');
asincrona()
    .then ( () => {
        console.timeEnd('asincrona');
    })


console.timeEnd('todo');


//-------------------

function asincrona() {
    return new Promise ( (resolve) => {
        setTimeout(() => {
            console.log('Termina el proceso asincrono');
            resolve();
        }, 1000);
    })
}