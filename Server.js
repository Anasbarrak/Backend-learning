const express = require('express');
const port= 4000;
const app= express()
app.get('/anas', (req, res)=>{
    
    res.send('Hello Anas')
})
app.listen(port, ()=>{
    console.log(`Server is running at ${port}`)
})