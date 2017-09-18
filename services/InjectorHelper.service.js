const instances = {};

class InjectorHelper {
    static get instances() { return instances; }

    constructor() {
        throw new Error('do not instantiate');
    }

    static getInstance(fn) {
        if (!InjectorHelper.instances[fn.name]) InjectorHelper.instances[fn.name] = new fn();
        return InjectorHelper.instances[fn.name];
    }
}

module.exports = InjectorHelper;
