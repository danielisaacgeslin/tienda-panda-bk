class BaseController {

    constructor() { }

    error(res, msg) {
        console.error(msg);
        return res.json(500, msg);
    }

    success(res, data) {
        return res.json(200, data);
    }

    clearAll(model) {
        return new Promise((resolve, reject) => {
            model.remove(error => {
                if (error) return reject(error);
                else resolve();
            });
        });
    }
}

module.exports = BaseController;
