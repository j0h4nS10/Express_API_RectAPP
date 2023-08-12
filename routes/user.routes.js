const express = require('express');

const router = express.Router();

const { readAllusers,
    readUser,
    createUser,
    updateUser,
    deleteUser  } = require('../controller')


router.get('/users',readAllusers)

router.get('/users/:id',readUser)

router.post('/users',createUser)

router.put('/users/:id',updateUser)

router.delete('/users/:id',deleteUser)


module.exports = router