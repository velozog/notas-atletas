# notas-atletas
projeto de certificação curso devStart

Projeto: Calculadora de Média de Notas de Atletas

Descrição:
Este projeto consiste em uma calculadora de média de notas de atletas. A partir de um conjunto de dados que contém o nome de cada atleta e suas respectivas notas, a função calcularMedia() calcula a média das notas de cada atleta, removendo a nota mais alta e a nota mais baixa antes do cálculo da média. Em seguida, ela exibe o nome do atleta, suas notas originais e a média válida (calculada após remover as notas mais altas e mais baixas).

Como Executar o Projeto:

Preparação dos Dados: Antes de executar o projeto, você precisa preparar os dados dos atletas. Cada atleta deve ter um objeto com as seguintes propriedades:

nome: o nome do atleta (string).
notas: um array contendo as notas do atleta (array de números).
Inclusão do Código JavaScript: Insira o código JavaScript da função calcularMedia() em seu projeto.

Chamada da Função: Chame a função calcularMedia() passando como argumento o conjunto de dados dos atletas.

Exemplo de Uso:

let dados = [
    {"nome": "Cesar Abascal", "notas": [10, 9.34, 8.42, 10, 7.88]},
    {"nome": "Fernando Puntel", "notas": [8, 10, 10, 7, 9.33]},
    {"nome": "Daiane Jelinsky", "notas": [7, 10, 9.5, 9.5, 8]},
    {"nome": "Bruno Castro", "notas": [10, 10, 10, 9, 9.5]},
]
calcularMedia(dados)

Visualização dos Resultados: Após a execução da função calcularMedia(), você verá no console do navegador a saída com o nome de cada atleta, suas notas originais e a média válida calculada.

Exemplo de Visualização:

Atleta: Cesar Abascal
Notas Obtidas: 10,10,7.88,8.42,9.34
Média Válida: 9,253333

Atleta: Fernando Puntel
Notas Obtidas: 10,10,7,8,9.33
Média Válida: 9.11

Atleta: Daiane Jelinsky
Notas Obtidas: 10,7,8,9.5,9.5
Média Válida: 9

Atleta: Bruno Castro
Notas Obtidas: 10,10,10,9,9.5
Média Válida: 9.83333333333
