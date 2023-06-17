const { Router } = require('express');
const { userController } = require('../controllers/users.controller');

const router = Router();

router.get('/users', userController.getAllUsers);

router.get('/user/:dni', userController.getUser);

router.post('/create-user', userController.postUser);

router.put('/update-user/:dni', userController.putUser);

router.delete('/delete-user/:dni', userController.deleteUser);

module.exports = router;