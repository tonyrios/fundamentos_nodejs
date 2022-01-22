console.time('bucle');
let suma = 0;
for (let i =0; i<10000000; i++){
  suma += i;
}
console.timeEnd('bucle');