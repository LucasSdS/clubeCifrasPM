class Usuario{
    constructor(nome, usuario, senha, email) {
        this.nome = nome
        this.usuario = usuario
        this.senha = senha
        this.email = email
        this.cifras = []
        Usuario.addUsuario(this)
    }

    setCifra(cifra) {
        this.cifras.push(cifra.nome); //mudei pra so alocar o nome da cifra
    }

    static addUsuario(usuario) {
        Usuario.usuarios.push(usuario)
    }

    static buscaUsuario(usuario, senha) {
        return Usuario.usuarios.find(usu => usu.usuario == usuario && usu.senha == senha)
    }
}

Usuario.usuarios = []
module.exports = Usuario