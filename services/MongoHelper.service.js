const mongoose = require('mongoose');

const constants = require('../constants');

mongoose.Promise = global.Promise;

class MongoHelper {
    static get db() { return mongoose.connection; }

    constructor() {
        throw new Error('do not instantiate');
    }

    static connect() {
        return mongoose.connect(constants.mongo.url, constants.mongo.options);
    }

}

module.exports = MongoHelper;