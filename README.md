# Dados dos Atletas

![preview](./_.github/preview.png)

> Projeto de certificação 2 – Dados dos atletas<br>Esse projeto faz parte da "Trilha 1. Lógica de Programação", do curso DEVstart pertencente ao SENAI.<br>Minha turma: FloripaMaisTec

## Problema Proposto

Criar uma aplicação capaz de receber informações de um atleta, bem como calcular parâmetros e exibi-los para o usuário.
Condições:
- 5 jurados avaliarão os atletas;
- Cada jurado pode fornecer uma nota de um (1) a dez (10);
- A média é calculada com base nas três notas do meio, desconsiderando a maior e menor nota.
- Categoria: Infantil: 9 a 11 anos / Juvenil: 12 e 13 anos / Intermediário: 14 e 15 anos / Adulto: 16 a 30 anos / Sem categoria: demais idades

### Especificações

Criar uma classe Atleta para concentrar os atributos e métodos dos atletas. A classe deverá receber os seguintes atributos: nome, idade, peso, altura, notas.
A média das notas não deve considerar a maior e menor nota do atleta. Por fim, apresentar ao usuário: nome, idade, peso, altura, notas, categoria, IMC e Média válida.

## Solução do Problema:
CONTINUAR DAQUI
- Desenvolvimento da classe CompeticaoGinasticaArtistica(atletas).

### Entrada da Classe: argumento

- O argumento de criação da classe, "atletas" é uma matriz de objetos. Cada objeto contém nome (string) e matriz de notas (números).

###### Exemplo de entrada:

>let atletas = [
<br> {
<br>   nome: "Nome_do_Atleta_1",
<br>   notas: [10, 9.34, 8.42, 10, 7.88]
<br> },
<br> {
<br>   nome: "Nome_do_Atleta_2",
<br>   notas:  [8, 10, 10, 7, 9.33]
<br> }]

### Saída

- Exibe no console o nome do atleta, as notas recebidas e a média das notas, utilizando a regra de excluir a maior e a menor nota do atleta.

###### Exemplo de saída:

>Atleta: Nome_do_Atleta_1
<br>Notas Obtidas: 7.88,8.42,9.34,10,10
<br>Média Válida: 9.253333333333333
>
><br>Atleta: Nome_do_Atleta_2
<br>Notas Obtidas: 7,8,9.33,10,10
<br>Média Válida: 9.11

### Uso da classe

- Para usar, deve-se criar uma nova instância da classe CompeticaoGinasticaArtistica passando a lista dos atletas conforme a entrada descrita acima.
> let competicaoAlunos = new CompeticaoGinasticaArtistica(atletas)

- Para exibir o resultado, basta chamar o método obterResultados() que exibirá no console o resultado dos alunos.
> competicaoAlunos.obterResultados();

## Tecnologias

- JavaScript
- Git e Github
