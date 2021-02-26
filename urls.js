const express=require('express');
const shortid=require('shortid');

const router =express.Router();

const urls={};

router.get('/',(req,res)=>{
  const urlList=[];
  Object.keys(urls).forEach(urlId =>{
    urlList.push({id:urlId,long_url:urls[urlId].long_url});
  });
  res.send(urlList);
});

router.post('/',(req,res)=>{
  const long_url=req.body.long_url;
  const id=shortid.generate();
  urls[id]=long_url;
  res.status(201).send({id});
});

router.get('/:id',(req,res)=>{
  const id=req.params.id;
  const long_url = urls[id];
  if(long_url){
    res.send({
      id:id,
      long_url:long_url

    });
  }else{
    res.status(404).send({
      "error":"Invalid short url id"
    });
  }
});

router.get('/u/:id',(req,res)=>{
  const id=req.params.id;
  const long_url = urls[id];
  if(long_url){
      res.redirect(long_url);
    }
  else{
    res.status(404).send({
      "error":"Invalid short url id"
    });
  }
});


module.exports=router;