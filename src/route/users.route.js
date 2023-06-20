const { Router } = require('express');
const { userController } = require('../controllers/users.controller');

const router = Router();

router.get('/users', userController.getAllUsers);

router.get('/users/:dni', userController.getUser);

router.post('/users', userController.postUser);

router.put('/users/:dni', userController.putUser);

router.delete('/users/:id', userController.deleteById);

router.delete('/users/:dni', userController.deleteByDni);

module.exports = router;