var express = require('express');

var app = express();

app.use(express.static('./app/public'));

app.set('view engine', 'ejs');

app.set('views', './app/views');




//rotas
app.get('/', function(req, res){
    res.render('index.ejs');
});

app.get('/status', function(req, res){
    res.render('status.ejs');
});

app.listen(3000, function(){
    console.log("Rodando na porta 3000!")
});