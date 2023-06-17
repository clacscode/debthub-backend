const { Router } = require('express');
const { debtController } = require('../controllers/debt.controller');

const router = Router();

const testMiddleware = (req, res, next) => {
    next();
};

router.get('/debts', debtController.getAllDebts);

router.get('/debt/id/:id', debtController.getDebtById);

router.get('/debt/dni/:dni', debtController.getDebtByDni);

router.post('/create-debt', debtController.postDebt);

router.put('/update-debt/:id', debtController.putDebt);

router.delete('/delete-debt/:id', debtController.deleteDebt);

module.exports = router;