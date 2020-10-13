const fs = require('fs');
const colors = require('colors');

let data = '';

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base "${ base }" ingresada no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`El límite "${ limite }" ingresado no es un número`);
        };

        console.log('======================'.blue);
        console.log(`Tabla del ${ base }`.yellow);
        console.log('======================'.blue);

        for (let i = 1; i <= limite; i++) {

            data += `${ base }x${ i } = ${ base * i }\n`;

        };

        resolve(data);

    });

};

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base "${ base }" ingresada no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`El límite "${ limite }" ingresado no es un número`);
        };

        for (let i = 1; i <= limite; i++) {

            data += `${ base }x${ i } = ${ base * i }\n`;

        };

        fs.writeFile(`archivos/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(colors.green(`tabla-${ base }.txt`));
        });

    });

};

module.exports = {
    crearArchivo,
    listarTabla
};