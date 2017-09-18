const restify = require('restify');

const constants = require('./constants');
const getRoutes = require('./routes');

const server = restify.createServer({ name: constants.appName });

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

getRoutes.then(routes => {
    routes.forEach(route => server[route.method](route.path, route.cb));
    server.listen(constants.server.port, () => {
        console.log(`${server.name} listening at ${server.url}`);
    });
});


