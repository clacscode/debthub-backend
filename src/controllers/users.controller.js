const pool = require('../database/postgres');

const getAllUsers = async (req, res, next) => {
    try {
        const query = 'SELECT * FROM users;';
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
}

const getUser = async (req, res, next) => {
    try {
        const query = `SELECT * FROM users WHERE dni=$1;`;
        const { dni } = req.params;
        const result = await pool.query(query, [dni]);
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
}

const postUser = async (req, res, next) => {
    try {
        const { dni, firstName, lastName, email, userPass, dateBirth, gender } = req.body;
        const query = `INSERT INTO users(dni, first_name, last_name, email, user_pass, date_of_birth, gender)
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`;
        const values = [dni, firstName, lastName, email, userPass, dateBirth, gender];
        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
}

const putUser = async (req, res, next) => {
    try {
        const { firstName, lastName, email, userPass, dateBirth, gender } = req.body;

        const { dni } = req.params;

        if (!firstName || !lastName || !email || !userPass || !dateBirth || !gender || !dni) {
            return res.status(400).send('Todos los campos son obligatorios.');
        }

        const query = `UPDATE users SET first_name=$1, last_name=$2, email=$3, user_pass=$4, date_of_birth=$5, gender=$6 WHERE dni=$7 RETURNING *;`;
        const values = [firstName, lastName, email, userPass, dateBirth, gender, dni];

        const result = await pool.query(query, values);

        if (result.rowCount === 0) {
            return res.status(404).send('Usuario no encontrado.');
        }

        res.json(result.rows);
    } catch (error) {
        next(error);
    }
}

const deleteById = async (req, res, next) => {
    try {
        const query = `DELETE FROM users WHERE id = $1 RETURNING*;`;
        const { id } = req.params;
        const result = await pool.query(query, [id]);
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
}

const deleteByDni = async (req, res, next) => {
    try {
        const query = `DELETE FROM users WHERE dni = $1 RETURNING*;`;
        const { dni } = req.params;
        const result = await pool.query(query, [dni]);
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    userController: {
        getAllUsers,
        getUser,
        postUser,
        putUser,
        deleteById,
        deleteByDni
    }
};
