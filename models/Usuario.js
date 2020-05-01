const db = require('./db');

const Usuario = db.sequelize.define('users',{
    login: {
        type: db.Sequelize.STRING
    },
    senha:{
        type: db.Sequelize.STRING
    },
    cpf:{
        type: db.Sequelize.STRING
    }
});

module.exports = Usuario;