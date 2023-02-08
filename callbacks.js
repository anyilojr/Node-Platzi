function soyAsincrona(micallback){
    // console.log('Hola, soy una función asíncrona');
    setTimeout(function(){
        console.log('Estoy siendo asíncrona');
        micallback();
    }, 1000);
}
console.log('Iniciando proceso...');

soyAsincrona(function(){
    console.log('terminando proceso...');
});

