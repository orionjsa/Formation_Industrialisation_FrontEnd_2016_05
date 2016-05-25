//syntaxe Require.js
var fs =require('fs');
var path = require('path');

// __ dirname = repertoire ou se trouve le fichier build.js
try{
    fs.rmdirSync(path.join(__dirname, 'dist'));
} catch(e){
    console.log('rep dist does not exists.');
}
fs.mkdirSync(path.join(__dirname, 'dist'));

// index.html
var content = fs.readFileSync(path.join(__dirname, '_index.html'));
fs.writeFileSync(path.join(__dirname, 'dist',  '_index.html'), content);