var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
var express      = require('express');
var session      = require('express-session');
var logger       = require('morgan');
var path         = require('path');
var passport     = require('passport');
var favicon      = require('serve-favicon');

var routes = require('./routes/index');
var users  = require('./routes/users');

var app = express();

// Define a `Engine` da aplicação
app.set('view engine', 'ejs');

// Deixar pasta (public) estatica
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// Sessão do Express
app.use(session({
    secret: 'es_un_secreto',
    saveUninitialized: true,
    resave: true
}));

// Inicio do Passport
app.use(passport.initialize());
app.use(passport.session());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Define as rotas da aplicação
app.use('/', routes);
app.use('/users', users);

// Porta da aplicação
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('Servidor iniciado na porta ' + app.get('port'));
});

module.exports = app;
