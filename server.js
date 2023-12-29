const express = require('express')
const app = express()

//Declare routes
app.get('/',(req,res)=>{
    res.send('Hello Narru')
})


app.listen(3000,(request,response)=>{
    console.log('Request received')
})