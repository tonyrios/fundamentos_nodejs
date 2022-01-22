const sharp = require('sharp');

sharp('original.png')
  .resize(100)
  .toFile('resized.png');