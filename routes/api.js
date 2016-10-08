var express = require('express');
var router  = express.Router();
var mysql   = require('../models/mysql.js');

// Página inicial da API
router.get('/', function(req, res, next) {
    res.render('api/index', { title: 'WebFinanceiro - API' });
});

router.get('/Usuarios', function(req, res, next) {
    var resultados = [];

	mysql.query("SELECT * FROM Usuario", function(err, linhas) {
		if (err) throw err;

		linhas.forEach(function(row) {
            resultados.push(row);
        });

        res.send(resultados);
	});
});

router.get('/Usuarios/:id', function(req, res, next) {
    var resultados = [];

	mysql.query("SELECT * FROM Usuario WHERE ID = ?", req.params.id, function(err, linhas) {
		if (err) throw err;

		linhas.forEach(function(row) {
            resultados.push(row);
        });

        res.send(resultados);
	});
});

module.exports = router;
