const fs = require('fs');
const {Transform} = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
// readableStream.setEncoding('UTF8');
// readableStream.on('data', chunk => {
//   data += chunk;
// })

// readableStream.on('end', () =>{
//   console.log(data);
// })

// process.stdout.write('hola')
// process.stdout.write('que')
// process.stdout.write('tal')

// const Transform = stream.Transform;

class Mayus extends Transform{
  constructor(){
    super()
  }
  
  _transform (chunk, codif, cb){
    let chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
  }
}

let mayus = new Mayus();

readableStream
  .pipe(mayus)
  .pipe(process.stdout);


