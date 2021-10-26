const express = require('express')
const app = express()

app.get('/',(req,res)=>{

    res.send('Welcome to Express Server')

})

const PORT = 5000;
app.listen(PORT,()=>{

    console.log('Server Started at PORT ${PORT}')
    
})