const restify = require('restify');

const constants = require('./constants');
const getRoutes = require('./routes');

const server = restify.createServer({ name: constants.appName });

server.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

getRoutes.then(routes => {
    routes.forEach(route => server[route.method](route.path, route.cb));
    server.listen(constants.server.port, () => {
        console.log('listening at...');
        console.log('server name:', server.name);
        console.log('server url:', server.url);
        console.log('server port:', constants.server.port);
        console.log('server host:', constants.server.host);
    });
});


