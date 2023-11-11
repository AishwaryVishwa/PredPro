const express=require('express')

const app=express();
const PORT=5000;

app.get('/',(req,res)=>{
         res.send('hello world')
})
app.listen(PORT,(error)=>{
    if(!error)
    {
        console.log("server is started at port "+PORT);
    }
    else
    {
        console.log("error happened server can't start");
    }
});
