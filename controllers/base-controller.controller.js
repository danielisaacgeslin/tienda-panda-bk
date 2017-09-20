class BaseController {

    constructor() { }

    error(res, msg) {
        console.error(msg);
        return res.json(500, msg);
    }

    success(res, data) {
        console.log('success:', data);
        return res.json(200, data);
    }

    clearAll(model) {
        return model.remove();
    }
}

module.exports = BaseController;
