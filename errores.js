function serompe(){
    return 3 + z;
}
try{
    serompe();
} catch(err){
    console.error('Algo se ha roto...');
    console.error(err.message);
}
console.log('Esto de aqui está al final');