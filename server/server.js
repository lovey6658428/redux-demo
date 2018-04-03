const express = require('express')

// 新建APP
const app = express()

app.get('/',function(req,res){  //req为请求 res为响应
    res.send('<h1>hello world</h1>');
})

app.get('/data',function(req,res){
    res.json({username:'yangping'});
})

app.listen(9093,function(){
    console.log('服务器开启了');
})