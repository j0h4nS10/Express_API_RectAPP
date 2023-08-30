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
router.get('/',readAllusers);
router.get('/users:id', auth ,readUser);
router.put('/users:id', auth ,updateUser);
router.delete('/users:id', auth ,deleteUser);

// 4
module.exports = router;