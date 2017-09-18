const glob = require('glob');

module.exports = new Promise((resolve, reject) => {
    let routes = [];
    glob(`${__dirname}/*.js`, (error, matches) => {
        if (error) return reject(console.error('ups... error on routes glob'));
        for (let match of matches) {
            let filename = match.slice(match.lastIndexOf('/'), match.length);
            if (filename === '/index.js') continue;
            routes = routes.concat(require(match));
        }
        resolve(routes);
    });
});
