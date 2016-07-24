var restify = require('restify');

var server = restify.createServer();
require('./controllers/mainController')(server);

server.listen(8080, function() {
  console.log('Remote started', server.name, server.url);
});