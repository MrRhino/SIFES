var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect();
app.use(serveStatic(__dirname));

var port       = process.env.PORT || 8080;
app.listen(port);

console.log('Accepting connections on port ' + port + '...');
