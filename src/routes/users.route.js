import { Router } from 'express'
import { userController } from '../controllers/users.controller.js'

const router = Router();

router.get('/users', userController.getAllUsers);

router.post('/users', userController.postUser);

router.get('/users/:dni', userController.getUser);

router.put('/users/:dni', userController.putUser);

router.delete('/users/id/:id', userController.deleteById);

router.delete('/users/:dni', userController.deleteByDni);

export default router;