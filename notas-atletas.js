function calcularMedia(dados) {
    for (let c = 0; c < dados.length; c++) {
        const atleta = dados[c]["nome"];
        const notas = dados[c]["notas"];
        const notasCompletas = notas.slice(); 
        const maxNotaIndex = notas.indexOf(Math.max(...notas));
        notas.splice(maxNotaIndex, 1);
        const minNotaIndex = notas.indexOf(Math.min(...notas));
        notas.splice(minNotaIndex, 1);
        const media = notas.reduce((a, b) => a + b, 0) / notas.length;
        console.log(`\nAtleta: ${atleta}\nNotas Obtidas: ${notasCompletas}\nMedia Valida: ${media}`);
    }
}
let dados = [
    {"nome": "Cesar Abascal", "notas": [10, 9.34, 8.42, 10, 7.88]},
    {"nome": "Fernando Puntel", "notas": [8, 10, 10, 7, 9.33]},
    {"nome": "Daiane Jelinsky", "notas": [7, 10, 9.5, 9.5, 8]},
    {"nome": "Bruno Castro", "notas": [10, 10, 10, 9, 9.5]},
]
calcularMedia(dados)