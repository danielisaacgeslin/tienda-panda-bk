module.exports = {
    appName: 'Tienda Panda BK',
    server: {
        port: 8080
    },
    mongo: {
        url: process.env.url,
        options: {
            useMongoClient: true
        }
    }
};