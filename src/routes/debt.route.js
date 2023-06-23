import { Router } from 'express'
import { debtController } from '../controllers/debt.controller.js'
import { validateIdExist } from '../middlewares/middlewares.js'

const router = Router();

router.get('/api/debts', debtController.getAllDebts);

router.get('/api/debts/:id', validateIdExist, debtController.getDebtById);

router.get('/api/debts/:dni', debtController.getDebtByDni);

router.post('/api/debts', debtController.postDebt);

router.put('/api/debts/:id', debtController.putDebt);

router.delete('/api/debts/:id', debtController.deleteDebt);

export default router;