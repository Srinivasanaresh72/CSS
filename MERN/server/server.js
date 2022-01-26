const express = require('express')
const app = express()


app.get('/',(req,res)=>{

    res.send('Welcome to express server')
})

app.get('/about',(req,res)=>{

    res.send(`<h1> Welcome to About Page </h1>`)

})

app.get('/users/:id',(req,res)=>{

    const id = req.params.id

    res.send(`<h2> Welcome User ${id} </h2>`)
})

const PORT = 5000;
app.listen(PORT,()=>{

    console.log(`Server Started at PORT ${PORT}`)
})