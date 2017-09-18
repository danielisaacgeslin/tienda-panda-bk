const restify = require('restify');

const constants = require('./constants');
const routes = require('./routes');

const server = restify.createServer({ name: constants.appName });

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

routes.forEach(route => server[route.method]('/test/:name', route.cb));

server.listen(constants.server.port, () => {
    console.log(`${server.name} listening at ${server.url}`);
});
