function calcular(operacao, valorB = 1) {
  alert("entrou no calcular");
  let valorA = parseFloat(document.getElementById("txtValorA").value);
  var status = true;
  //let valorB = parseFloat(document.getElementById("txtValorB").value);

  let resultado;

  switch (operacao) {
    case "+":
      resultado = valorA + valorB;
      alert(resultado);
      break;

    case "-":
      resultado = valorA - valorB;
      alert(resultado);
      break;

    case "/":
      resultado = valorA / valorB;
      alert(resultado);
      break;

    case "*":
      resultado = valorA * valorB;
      alert(resultado);
      break;
    case "quadrado":
      resultado = Math.sqrt(valorA);
      break;
    case "potencia":
      resultado = Math.pow(valorA, 2);
      break;
    case "fatorial":
      var fatorial = 1;
      for (i = valorA; i > 1; i--) {
        fatorial *= i;
      }
      resultado = fatorial;
      break;
    default:
      alert("Ocorreu um erro ao calcular!");
      var status = false;
  }

  if (status == true) {
    alert("Calculo realizdo com sucesso");

    // Formatando o valor para ter: separação a cada 3 dígitos, vírgula
    let resultado_formatado = formatarValor(resultado);

    alert(resultado_formatado);

    document.getElementById("visor").value = resultado_formatado;
  } else {
    alert("Ocorreu um erro ao calcular!");
  }
}
