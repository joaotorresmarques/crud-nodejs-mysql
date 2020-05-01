const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Usuario = require('./models/Usuario');

app.engine('handlebars',handlebars({
    defaultLayout: 'main'
}));

app.set('view engine','handlebars');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.get("/",function(req,res){
    //res.send("Bem vindo ao index");
    res.render('home');
});

app.get("/cadastro",function(req,res){
    res.render('cadastro');
})

app.get("/relatorio",function(req,res){
    Usuario.findAll().then(function(x){
        res.render('relatorio',{user: x});
    })
})

app.get('/deletar/:id',function(req,res){
    Usuario.destroy({where: {'id': req.params.id}}).then(function(){
        res.send('Deletado com sucesso!')
    }).catch(function(erro){
        res.send('usuario nao existe')
    })
})

app.post("/add",function(req,res){
    Usuario.create({
        login: req.body.login,
        senha: req.body.senha,
        cpf: req.body.cpf
    }).then(function(){
        res.redirect('/');
    }).catch(function(erro){
        res.send("erro! "+erro);
    })
})



app.listen(8085,function(){
    console.log("SERVER ON");
})