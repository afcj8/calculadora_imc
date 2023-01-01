function calcular() {
  var altura = parseFloat(document.getElementById("altura").value)
  var peso = parseInt(document.getElementById("peso").value)
  var resultado = document.getElementById("resultado")
  var imc = (peso / (altura ** 2)).toFixed(2)
    
  if (imc < 18.5) {
    resultado.innerHTML = `IMC: ${imc} (Abaixo do peso)`
  } else if (imc < 25) {
    resultado.innerHTML = `IMC: ${imc} (Peso normal)`
  } else if (imc < 30) {
    resultado.innerHTML = `IMC: ${imc} (Acima do peso)`
  } else if (imc < 35) {
    resultado.innerHTML = `IMC: ${imc} (Obesidade Grau I)`
  } else if (imc < 41) {
    resultado.innerHTML = `IMC: ${imc} (Obesidade Grau II)`
  } else if (imc > 41) {
    resultado.innerHTML = `IMC: ${imc} (Obesidade Grau III)`
  } else {
    resultado.innerHTML = 'Preencha todos os campos, por favor!' 
  }
}