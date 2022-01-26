const express = require('express')
const app = express()

//Static Routes

app.get('/',(req,res)=>{

    res.send('Welcome to express server')
})

app.get('/about',(req,res)=>{

    res.send(`<h1> Welcome to About Page </h1>`)

})

//Dynamic Routes

app.get('/users/:id',(req,res)=>{

    const id = req.params.id

    res.send(`<h2> Welcome User ${id} </h2>`)
})

//Route using a controller

const controller = require('./controllers/controller')
app.get('/products',controller.products)

//404 route

app.use(function(req,res,next){

    res.status(404).send('<h1> Oops! Page not Found !!! <h1>')
})

const PORT = 5000;
app.listen(PORT,()=>{

    console.log(`Server Started at PORT ${PORT}`)
})