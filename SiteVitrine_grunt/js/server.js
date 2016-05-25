/**
 * Created by Administrateur on 25/05/2016.
 */

var http = require('http');

var server = http.createServer(function(req, res){
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.end('<h2>Accueil</h2>');
    } else {
        res.statusCode = 400;
        res.setHeader('Content-type', 'text/html');
        res.end('<h2>Page introuvable</h2>');
    }
});

server.listen(8080, function() {
    console.log('Le serveur est demarré sur le port 8080');
});