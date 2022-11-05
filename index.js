const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'Suporte$ena2103@', {
    host: 'localhost',
    dialect: 'mysql'
})

// Config
  // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: main}))
    app.set('view engine', 'handlebars')


app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});