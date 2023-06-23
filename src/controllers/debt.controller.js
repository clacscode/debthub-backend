import pool from '../database/postgres.js'

const getAllDebts = async (req, res, next) => {
    try {
        const result = await pool.query('SELECT * FROM view_debts_user');
        res.json(result.rows);
    } catch (error) {
        next(error)
    }
};

const getDebtById = async (req, res, next) => {
    try {
        const query = 'SELECT * FROM debt WHERE debt_id=$1';
        const { id } = req.params;
        const result = await pool.query(query, [id]);
        res.json(result.rows);
    } catch (error) {
        next(error)
    }
};

const getDebtByDni = async (req, res, next) => {
    try {
        const query = 'SELECT * FROM debt WHERE dni=$1';
        const { dni } = req.params;
        const result = await pool.query(query, [dni]);
        res.json(result.rows);
    } catch (error) {
        next(error)
    }
};

const postDebt = async (req, res, next) => {
    try {
        const { dni, description, total, dues, quotaValue } = req.body;
        const query = `INSERT INTO debt(dni, description, total, dues, quota_value) 
        VALUES ($1, $2, $3, $4, $5) RETURNING *;`;
        const values = [dni, description, total, dues, quotaValue];
        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (error) {
        next(error)
    }
};

const putDebt = async (req, res, next) => {
    try {
        const { description, total, dues, quotaValue } = req.body;
        const { id } = req.params;
        const query = `UPDATE debt SET description=$1, total=$2, dues=$3, quota_value=$4 WHERE debt_id=$5 RETURNING*;`;
        const values = [description, total, dues, quotaValue, id];
        const result = await pool.query(query, values);
        if (result.rowCount === 0) {
            return res.status(404).send('Debt no encontrada.');
        }
        res.json(result.rows);
    } catch (error) {
        next(error)
    }
};

const deleteDebt = async (req, res, next) => {
    try {
        const query = 'DELETE FROM debt WHERE debt_id=$1 RETURNING*;';
        const { id } = req.params;
        const result = await pool.query(query, [id]);
        res.json(result.rows);
    } catch (error) {
        next(error)
    }
}

export const debtController = {
    getAllDebts,
    getDebtById,
    getDebtByDni,
    postDebt,
    putDebt,
    deleteDebt
};