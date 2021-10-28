const express = require('express')
const app = express()

//Static routes
app.get('/',(req,res)=>{

    res.send('<h1> Welcome to Express Server </h1>')
})

app.get('/about',(req,res)=>{

    res.send('<h1> Welcome to About Page </h1>')

})

//dynamic Routes
app.get('/users/:id',(req,res)=>{

    const id = req.params.id
    res.send('<h2>'+'Welcome User '+req.params.id+'</h2>')
})

//Route  using Controllers
const controller = require('./Controller/controller')
app.get('/products',controller.products)

//404 route
app.use(function(req,res,next){
    res.status(404).send('<h1> Sorry! Page not Found! </h1>')
})


const PORT = 5000;
app.listen(PORT,()=>{

    console.log('Server Started at PORT ${PORT}')
})