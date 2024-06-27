const { Router } = require('express');
const routes = new Router();

routes.get('/user', (req, res) =>{
    return res.send({message:'connect with sucess'})
})

module.exports = routes