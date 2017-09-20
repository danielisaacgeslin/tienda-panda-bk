const mongoose = require('mongoose');
const BaseController = require('./base-controller.controller');
const MongoHelper = require('../services/MongoHelper.service');
const AuthHelper = require('../services/AuthHelper.service');
const { schema, model } = require('../schemas/ml-ids.schema');

const example = { products: ['1'], promotions: ['2'], secondHand: ['3'] };

class MLController extends BaseController {
    constructor() {
        super();
        MongoHelper.connect();
        this.save = this.save.bind(this);
        this.find = this.find.bind(this);
    }

    save(req, res, next) {
        if (!AuthHelper.validateToken(req.headers.token)) return this.error(res, 'invalid token');
        this.clearAll(model)
            .then(() => model.create(req.body), error => this.error(res, error))
            .then(data => this.success(res, data), error => this.error(res, error));
    }

    find(req, res, next) {
        const params = JSON.parse(req.params.filters || '{}');
        model.findOne()
            .sort({ created_at: 1 })
            .exec(params)
            .then(data => this.success(res, data), error => this.error(res, error));
    }
}

module.exports = MLController;
