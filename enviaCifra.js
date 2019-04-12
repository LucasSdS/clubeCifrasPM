(function() {

    botaoCriarCifra.click(function() {  // envia os dados da cifra, fornecidos pelo front ao backend
        let musica = $('input[name="nomeMusica"]').val()
        let cifraRecebida = $('#cifra').val()

        $.post("/enviarCifra", {nomeMusica: musica, cifra: cifraRecebida, user: usuarioGlobal}, function(data) {
            window.location = data
        })
        // $.post("/login", {usuario: user, senha: password}, function(data) {
        //     usuario = data
        //     console.log(usuario)
        //     setUser(data)
        //     verificaUsuario()
        // })

    })



})()