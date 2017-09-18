module.exports = {
    appName: 'Tienda Panda BK',
    server: {
        port: 8080
    },
    mongo: {
        url: process.env.url,
        options: {
            db: process.env.db,
            user: process.env.user,
            pass: process.env.pass,
        }
    }
};