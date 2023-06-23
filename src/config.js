import { config } from 'dotenv'

config();

const processEnv = process.env;

const checkRequiredEnvVariables = requiredEnvVariables => {
    const missingEnvVariables = requiredEnvVariables.filter(variable => !(variable in processEnv));

    if (missingEnvVariables.length > 0) {
        console.error('Error: Required Env Var', missingEnvVariables);
        process.exit(1);
    }
}

checkRequiredEnvVariables([
    'DB_USER',
    'DB_PASSWORD',
    'DB_HOST',
    'DB_PORT',
    'DB_DATABASE',
    'DB_SCHEMA',
    'SV_PORT'
]);

export const db = {
    user: processEnv.DB_USER,
    password: processEnv.DB_PASSWORD,
    host: processEnv.DB_HOST,
    port: processEnv.DB_PORT,
    database: processEnv.DB_DATABASE,
    schema: processEnv.DB_SCHEMA
}

export const sv = {
    port: processEnv.SV_PORT
}