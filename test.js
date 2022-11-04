const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'Suporte$ena2103@', {
    host: 'localhost',
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

Postagem.sync({force: true});