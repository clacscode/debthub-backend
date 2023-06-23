import pg from 'pg'
import { db } from '../config.js'

const { Pool } = pg;

const { user, password, host, port, database, schema } = db;

const pool = new Pool({
    user,
    password,
    host,
    port,
    database,
    schema
});

pool.connect((err, client, release) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('>>> DB is connected');
        release();
    }
});

export default pool;