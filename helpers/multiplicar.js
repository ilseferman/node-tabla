const fs     = require('fs')
const colors = require('colors');
const crearArchivo = async( base = 5, hasta = 10, listar = false ) => {
    try {
        let salida = ''
    
        for (let numero = 1; numero <= hasta; numero++ ) {
            salida += `${ base } x ${numero} = ${  base * numero }\n`
        }

        if ( listar ){
            console.log("=============================")
            console.log(`     Tabla del `, colors.green(base))
            console.log("=============================")
            console.log(salida)
        }
        
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida )
        
        return colors.rainbow(`tabla-${ base }.txt creado`)
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}