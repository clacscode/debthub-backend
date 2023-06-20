const { Router } = require('express');
const { debtController } = require('../controllers/debt.controller');
const { validateIdExist } = require('../middlewares');

const router = Router();

router.get('/debts', debtController.getAllDebts);

router.get('/debts/:id', validateIdExist, debtController.getDebtById);

router.get('/debts/:dni', debtController.getDebtByDni);

router.post('/debts', debtController.postDebt);

router.put('/debts/:id', debtController.putDebt);

router.delete('/debts/:id', debtController.deleteDebt);

module.exports = router;