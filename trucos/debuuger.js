// const http = require('http');

// http.createServer(router).listen(3000);


// function router (req, res){
//     console.log('nueva petición!');
//     console.log(req.url);

//     switch (req.url){
//         case '/':
//             res.write('Hola, Bienvenido a Anyilo Curso de Node!');
//             res.end();
//             break;

//             case '/jesus':
//             res.write('Hola, Bienvenido a Jesus Curso de Música!');
//             res.end();
//             break;

//             default:
//                 res.write('Error 404: No se lo que quieres');
//                 res.end();
//     }
//     // res.writeHead(201, { 'Content-Type': 'text/plain' })

//     // //Escribir respuesta al usuario
//     // res.write('Hola, ya se utilizar HTTP con Node JS')

//     // res.end();
// }

// console.log("Escuchando http en el puerto 3000");


const http = require('http');

http.createServer(router).listen(3000);

function router (req, res){
    console.log('nueva petición!');
    console.log(req.url);

    switch (req.url){
        case '/':
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.write('Hola, Bienvenido a Anyilo Curso de Node!');
            res.end();
            break;

            case '/jesus':
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.write('Hola, Bienvenido a Jesus Curso de Música!');
            res.end();
            break;

            default:
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.write('Error 404: No se lo que quieres');
                res.end();
    }
}

console.log("Escuchando http en el puerto 3000");