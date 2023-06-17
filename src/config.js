const { config } = require('dotenv');

config();

const processEnv = process.env;

module.exports = {
    db: {
        user: processEnv.DB_USER,
        password: processEnv.DB_PASSWORD,
        host: processEnv.DB_HOST,
        port: processEnv.DB_PORT,
        database: processEnv.DB_DATABASE,
        schema: processEnv.DB_SCHEMA
    },
    sv: {
        port: processEnv.SV_PORT
    }
}