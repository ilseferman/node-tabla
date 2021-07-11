const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
console.clear()
// console.log( argv )

crearArchivo( argv.b, argv.h , argv.l )
    .then( nombreArchivo => console.log( nombreArchivo ))
    .catch( err => console.log(err))


// console.log( process.argv )
// console.log( 'base: yargs', argv.base )
// const [ , , arg3 ] = process.argv
// const [ , base = 1 ] = arg3.split('=')
// console.log( base )


// const base  = 3
// crearArchivo( base )
//     .then( nombreArchivo => console.log( nombreArchivo, 'creado' ))
//     .catch( err => console.log(err))

// node app --base = 5 --listar
// node app -b = 5 -l