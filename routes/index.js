const test = (req, res, next) => {
    res.send(req.params);
    return next();
};

module.exports = [
    { path: '/test/:name', method: 'get', cb: test }
];
