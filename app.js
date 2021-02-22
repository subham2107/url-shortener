const express = require('express');
const api=require('./api');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/api',api);

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});