const botao = document.getElementById('botao');
const resultadoo = document.getElementById('resultado');

botao.addEventListener('click', imc);

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    let classifica = '';

    if (nome !== "" && altura !== "" && peso !== "") {
        const resull = peso / (altura * altura)


        if (resull < 18.5) {
            classifica = 'você esta ABAIXO do peso ideal!'
        } else if (resull < 24.9) {
            classifica = 'você esta no peso IDEAL!'
        } else if (resull < 29.9) {
            classifica = 'você esta com SOBREPESO! (grau I)'
        } else if (resull < 39.9) {
            classifica = 'você esta com OBESIDADE! (grau II)'
        } else if (resull > 40.0) {
            classifica = 'você esta com OBESIDADE GRAVE! (grau III)'
        }
        resultado.textContent = `Olá ${nome} seu IMC é: ${resull.toFixed(1)}, e ${classifica} `

    } else {
        resultadoo.textContent = `Preencha todos os campos!`
    }


}