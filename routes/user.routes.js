// 1
const express = require('express');
const router = express.Router();

//2
const { readAllusers,
    readUser,
    createUser,
    updateUser,
    deleteUser  } = require('../controller')

// 3
router.get('/',readAllusers)
router.get('/:id',readUser)
router.post('/',createUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)

// 4
module.exports = router;