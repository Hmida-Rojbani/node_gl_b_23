const http = require('http');

http.createServer( (req,res) => {
    res.writeHead(200);
    res.write('Bonjour GLSI-B');
    res.end();
}).listen(8080);

console.log('Serveur runnig on 8080');