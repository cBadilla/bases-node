const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');

const comando = argv._[0];
const base = argv.base;
const limite = argv.limite;

// console.log(argv)

switch (comando) {
    case 'listar':
        listarTabla(base, limite)
        break;

    case 'crear':
        crearArchivo(base, limite)
            .then(() => {
                console.log(colors.green(`El archivo tabla-${base}.txt ha sido creado`));
            }).catch((error) => {
                console.log(error)
            })
        break;
    default:
        console.log('Comando no reconocido')
}