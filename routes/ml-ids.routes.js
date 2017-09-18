const InjectorHelper = require('../services/InjectorHelper.service');
const MLController = require('../controllers/ml-ids.controller');

module.exports = [
    { path: '/test', method: 'get', cb: InjectorHelper.getInstance(MLController).save }
];
