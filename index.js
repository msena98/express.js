const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

// Config
    // Template Engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Conexão com banco de dados MySql
        const sequelize = new Sequelize('test', 'root', 'Suporte$ena2103@', {
        host: 'localhost',
        dialect: 'mysql'
        }) 
// Rotas
    app.get('/cad', function(req,res){
        res.send('Rota de cadastros de POSTS');
    })

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});