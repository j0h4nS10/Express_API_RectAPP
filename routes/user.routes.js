// 1
const express = require('express');
const router = express.Router();

//2
const { readAllusers,
    readUser,
    createUser,
    updateUser,
    deleteUser } = require('../controller')

const auth = require('../middleware/auth')

// 3
router.get('/', auth, readAllusers);
router.get('/:id', auth, readUser);
router.put('/:id', auth, updateUser);
router.delete('/:id', auth, deleteUser);

// 4
module.exports = router;