const express = require('express');
const urls=require('./urls');
const router = express.Router();

router.use('/urls',urls);

router.get('/',(req,res) =>{
  res.send('Hi World');
});

module.exports = router;