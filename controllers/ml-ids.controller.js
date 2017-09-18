const mongoose = require('mongoose');
const constants = require('../constants');
const { schema, model } = require('../schemas/ml-ids.schema');

mongoose.connect(constants.mongo.url, constants.mongo.options);

class MLController {
    constructor() { }

    save(req, res, next) {
        console.log('req', req.params);
        res.json(200, { a: 2 })
    }
}

module.exports = MLController;