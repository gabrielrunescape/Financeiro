var express = require('express');
var mysql   = require('mysql');

// Conexão com mysql
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'gabriel435',
    port: '3306',
    database: 'WebFinanceiro'
});

module.exports = connection;
