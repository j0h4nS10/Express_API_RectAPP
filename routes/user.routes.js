// 1
const express = require('express');
const router = express.Router();

//2
const { readAllusers,
    readUser,
    updateUser,
    deleteUser } = require('../controller')

const auth = require('../middleware/auth')



// 3
router.get('/', auth ,readAllusers);
router.get('/users:id', readUser);
router.put('/users:id', updateUser);
router.delete('/users:id', deleteUser);

// 4
module.exports = router;