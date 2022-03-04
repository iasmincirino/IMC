function calculate(){
    let altura = (document.getElementById('altura').value)/100;
    let peso = document.getElementById('peso').value;

    let imc = peso / altura ** 2;
    let text = ""
    if (imc < 18.5){
        text = 'Você está magro demais!'
    } else if (imc < 25.9){
        text = 'Você está no peso ideal'
    } else if (imc < 29.9){
        text = 'Você está com sobrepeso'
    } else if (imc < 39.9){
        text = 'Você está com obesidade'
    } else if (imc < 109.9){
        text = 'Você está com obesidade mórbida'
    }
    document.getElementById('text').innerHTML=text
}