module.exports = {
    appName: 'Tienda Panda BK',
    server: {
        port: process.env.PORT || 8080,
        host: process.env.HOST || 'localhost'
    },
    mongo: {
        url: process.env.url,
        options: {
            useMongoClient: true
        }
    }
};