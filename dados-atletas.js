class Atleta {
  constructor(nome, idade, peso, altura, notas){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
    this.categoria = this.calculaCategoria();
    this.imc = this.calculaIMC();
    this.mediaValida = this.calculaMediaValida();
  }

  calculaCategoria(){
    if(this.idade >= 9 && this.idade <= 11){
      return "Infantil"
    } else if(this.idade >= 12 && this.idade <= 13){
      return "Juvenil"
    } else if(this.idade >= 14 && this.idade <= 15){
      return "Intermediário"
    } else if(this.idade >= 16 && this.idade <= 30){
      return "Adulto"
    } else {
      return "Sem categoria"
    }
  }

  calculaIMC(){
    return this.peso / this.altura ** 2
  }

  calculaMediaValida(){
    let ultimo_indice = this.notas.length - 1
    let notas = this.notas.sort(function(a, b){
      return a - b;
      }).slice(1, ultimo_indice)
    return notas.reduce(function(total, atual){
      return total + atual;
    }, 0) / notas.length;
  }

  obtemNomeAtleta(){
    return this.nome;
  }

  obtemIdadeAtleta(){
    return this.idade
  }

  obtemPesoAtleta(){
    return this.peso
  }

  obtemAlturaAtleta(){
    return this.altura
  }

  obtemNotasAtleta(){
    return this.notas
  }

  obtemCategoria(){
    return this.categoria;
  }

  obtemIMC(){
    return this.imc;
  }

  obtemMediaValida(){
    return this.mediaValida;
  }

  exibirResultado(){
    console.log(`Nome: ${this.obtemNomeAtleta()}
Idade: ${this.obtemIdadeAtleta()}
Peso: ${this.obtemPesoAtleta()}
Altura: ${this.obtemAlturaAtleta()}
Notas: ${this.obtemNotasAtleta()}
Categoria: ${this.obtemCategoria()}
IMC: ${this.obtemIMC()}
Média válida: ${this.obtemMediaValida()}`)
  }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);
atleta.exibirResultado();