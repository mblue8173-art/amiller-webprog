const express = require('express');
const { getUsers, createUser, updateUser, deleteUser, loginUser } = require('../controllers/userController');
const { getAllUsers, getUserById, registerUser, loginUser: login, updateUser: update, deleteUser: delete_ } = require('../controllers/userController');

const router = express.Router();

// Auth routes
router.post('/register', registerUser);
router.post('/login', login);
router.post('/logout', (req, res) => res.status(200).json({ message: 'Logout successful' }));

// User CRUD routes
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', registerUser);
router.put('/users/:id', update);
router.delete('/users/:id', delete_);

module.exports = router;
