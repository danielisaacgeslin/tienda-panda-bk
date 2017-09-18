const InjectorHelper = require('../services/InjectorHelper.service');
const MLController = require('../controllers/ml-ids.controller');

module.exports = [
    { path: '/ml-ids/:filters', method: 'get', cb: InjectorHelper.getInstance(MLController).find },
    { path: '/ml-ids', method: 'post', cb: InjectorHelper.getInstance(MLController).save }
];
