import pool from '../database/postgres.js'

export const validateIdExist = async (req, res, next) => {
    const { id } = req.params;
    try {
        const query = `SELECT * FROM debt WHERE debt_id = $1;`;
        const result = await pool.query(query, [id]);

        if(result.rowCount === 0){
            return res.status(404).json({ error: 'ID not found' });
        }
        next();
    } catch (error) {
        next(error);
    }
}