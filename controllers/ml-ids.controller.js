const mongoose = require('mongoose');
const BaseController = require('./base-controller.controller');
const MongoHelper = require('../services/MongoHelper.service');
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
        this.clearAll(model)
            .then(() => model.create(req.body, (error, model) => {
                if (error) return this.error(res, error);
                else return this.success(res, model);
            }));
    }

    find(req, res, next) {
        const params = JSON.parse(req.params.filters || '{}');
        model.findOne().sort({ created_at: 1 }).exec(params, (error, model) => {
            if (error) return this.error(res, error);
            else return this.success(res, model);
        });
    }
}

module.exports = MLController;