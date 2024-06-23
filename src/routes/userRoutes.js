const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateUser } = require('../validators/userValidator');

router.get('/worko/user', userController.listUsers);
router.get('/worko/user/:userId', userController.getUser);
router.post('/worko/user', validateUser, userController.createUser);
router.put('/worko/user/:userId', validateUser, userController.updateUser);
router.patch('/worko/user/:userId', validateUser, userController.partialUpdateUser);
router.delete('/worko/user/:userId', userController.deleteUser);

module.exports = router;
