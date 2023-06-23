import { Router } from 'express'
import { debtController } from '../controllers/debt.controller.js'
import { validateIdExist } from '../middlewares/middlewares.js'

const router = Router();

router.get('/debts', debtController.getAllDebts);

router.post('/debts', debtController.postDebt);

router.get('/debts/:id', validateIdExist, debtController.getDebtById);

router.get('/debts/:dni', debtController.getDebtByDni);

router.put('/debts/:id', debtController.putDebt);

router.delete('/debts/:id', debtController.deleteDebt);

export default router;