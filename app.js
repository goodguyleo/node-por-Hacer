// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);

        break;
    case 'listar':


        let listado = porHacer.getListado();


        for (let tarea of listado) {

            console.log('===========Por Hacer==========='.bgWhite.black);
            console.log(`${tarea.descripcion}                  `.bgWhite.black);
            console.log('Estado'.bgWhite.black, tarea.completado);
            console.log('===========Por Hacer==========='.bgWhite.black);

        }
        break;

    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)

        console.log(actualizado);

        break;

    case 'borrar':

        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log("comando no es reconocido");

}