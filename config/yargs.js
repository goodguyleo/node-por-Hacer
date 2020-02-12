const opts = {


    completado: {

        default: true,
        alias: 'c',
        desc: 'Marca como completada una tarea'

    }


}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion: {

            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'

        }
    })


.command('actualizar', 'Actualiza el estado completado de una tarea', {

    descripcion: {

        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'marca como completado o pendiente la tarea'
    }

})

.command('borrar', 'Borra una tarea', {
        descripcion: {

            demand: true,
            alias: 'd',
            desc: ' Borra una tarea'

        }
    })
    .help()
    .argv;

module.exports = {
    argv
}