process.on('beforeExit', ()=>{
  console.log('El proceso va a terminar');
});

process.on('exit', ()=>{
  console.log('Ale, el proceso acabó');
});

process.on('uncaughtException', (err, origen)=>{
  console.error('Vaya se nos ha olvidad capturar un error');
  console.log(err);
})

//functionQueNoExiste();
