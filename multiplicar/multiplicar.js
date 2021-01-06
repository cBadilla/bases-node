const fs = require('fs');

const listarTabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i} `)
    }
}

const crearArchivo = async(base, limite) => {

    if (!Number(base)) {
        throw new Error, 'No es un número';
    }
    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i} \n`
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, async(err) => {
        if (err) {
            throw new Error;
        } else {
            return await `tabla-${base}.txt`;
        }

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}