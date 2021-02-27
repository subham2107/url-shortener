const express = require('express');
const urls=require('./urls');
const router = express.Router();

router.use('/urls',urls);

module.exports = router;