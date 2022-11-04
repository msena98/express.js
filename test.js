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


const Usuarios = sequelize.define('usuarios', {
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

Usuarios.create({
    nome: "Matheus",
    sobrenome: "Sena",
    idade: 24,
    email: "dev.matheussena@gmail.com"
})