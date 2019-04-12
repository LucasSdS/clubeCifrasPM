const db = require('./database')
const Musica = require('./musica')
const Busca = require('./busca.js')


class Cifra{

    constructor(nomeMusica, cifraMusica){

        this.cifra = cifraMusica
        this.musica

        this.verificaExistenciaMusica(nomeMusica)
        this.musica.setCifra(this)

        // if(db.execute(`SELECT * FROM musica WHERE nome = "${this.nome}"`) == false){
        //     Musica = new musica(this.nome)
        // }

        //criaCifraBd()
    }
    //cria a cifra no banco refereciando a musica
    criaCifraBd(){
        db.execute(`INSERT INTO cifra (nome,musica) VALUES ("${this.nome}", "${this.cifra}")`)
    }

    verificaExistenciaMusica(nomeMusica) {
        let musicaAchada = Musica.buscaMusica(nomeMusica);

        if(musicaAchada == Object) {
            this.musica = musicaAchada
        }else{
            this.musica = new Musica(nomeMusica)
        }
    }




  }
module.exports = Cifra