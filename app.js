//requireds
//const fs = require('fs'); --> Esta es de un proyecto propio de Node, osea esta librería ya existe en Node
//const fs = require('./express'); --> Esto no es una librería propia de Node. Es un paquete que se instala y luego se utiliza. Son códigos que otras personas hiceron por nosotros
//const fs = require('./[ubicación del archivo]'); --> Son archivos que nosotros creamos en el proyecto.

const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(lista => console.log(lista))
            .catch(err => console.log(err));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Se ha creado el archivo ${ archivo }`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');

}