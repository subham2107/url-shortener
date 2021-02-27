const express = require('express');
const api=require('./api');
const { urls }   = require('./urls_data');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/api',api);

app.get('/u/:id',(req,res)=>{
  const id=req.params.id;
  const long_url = urls[id];
  if(long_url){
      res.redirect(long_url);
    }
  else{
    res.status(404).send({
      "error":"Invalid url"
    });
  }
});

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});