let nombre = process.env.NOMBRE || 'Sin Nombre';
let web = process.env.WEB_URL || 'Sin web';

console.log(`Hola ${nombre}`);
console.log(`Mi web es ${web}`);
console.log("HI");


//las variables de entorno por fuera se colocan por estandar en mayusculas
//ejemplo: NOMBRE=Carlos node fundamentos_nodejs/entorno.js
//las variables que necesites por fuera con dos palabras o mas se separan con guión bajo, por ejemplo
//WEB_URL=Carlos node fundamentos_nodejs/entorno.js
//Si necesitas dos variables de entorno se separan por espacio
//NOMBRE=Carlos WEB_URL=Carlos node fundamentos_nodejs/entorno.js