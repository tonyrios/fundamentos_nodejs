let exampel = [
  {
    a: '2',
    b: 3
  },
  {
    a: 4,
    b: '4'
  }
]

console.table(exampel);

console.group('Conversación');
console.log('Hola');
console.log('Blablabla');
console.log('Adios');
console.groupEnd('Conversación');
console.log("Fuera del grupo :(");

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');
