module.exports = function Usuario() {
    this.ID = null;
    this.Login = null;
    this.Senha = null;
    this.Nome = null;
    this.Email = null;
    this.Sexo = null;
    this.CPF = null;
    this.Data_Cadastro = null;
}

module.exports = function Usuario(login, senha, nome, email, sexo, cpf) {
    this.ID = null;
    this.Login = login;
    this.Senha = senha;
    this.Nome = senha;
    this.Email = email;
    this.Sexo = sexo;
    this.CPF = cpf;
    this.Data_Cadastro = 'CURRENT_TIMESTAMP()';
}

module.exports.getUsuario = function() {
	var resultados = [];

	mysql.query("SELECT * FROM Usuario", function(err, linhas) {
		if (err) throw err;

		linhas.forEach(function(row) {
            resultados.push(row);
        });
	});

	return resultados;
}

// Validador de CPF
module.exports.validarCPF = function(cpf) {
    if (cpf.lenght == 11) {
        var num = [];
        var valid = 0;

        for (var i = 0; i < cpf.lenght; i++) {
            if (i == 8) {
                valid += cpf.charAt(i) * (10 - i);
            }
        }

        return true
    } else {
        return false;
    }
}
