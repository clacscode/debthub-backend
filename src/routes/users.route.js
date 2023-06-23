import { Router } from 'express'
import { userController } from '../controllers/users.controller.js'

const router = Router();

router.get('/api/users', userController.getAllUsers);

router.get('/api/users/:dni', userController.getUser);

router.post('/api/users', userController.postUser);

router.put('/api/users/:dni', userController.putUser);

router.delete('/api/users/:id', userController.deleteById);

router.delete('/api/users/:dni', userController.deleteByDni);

export default router;