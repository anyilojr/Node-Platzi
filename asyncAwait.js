async function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola, '+ nombre);
            resolve(nombre);
        }, 1500);
    });
    
}

async function hablar(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log('Blablabla bla bla...')
            resolve(nombre);
        }, 1000);
    })
};

async function adios(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log('Adios', nombre);
            resolve();
        }, 1000);
    })
}

//---
async function main() {
    let nombre = await hola('Alejandro');
    await hablar();
    await hablar(); 
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso')
}





//----
