const superSecretToken = process.env.url;

class AuthHelper {

    constructor() {
        throw new Error('do not instantiate');
    }

    static validateToken(token) {
        return token === superSecretToken;
    }

}

module.exports = AuthHelper;