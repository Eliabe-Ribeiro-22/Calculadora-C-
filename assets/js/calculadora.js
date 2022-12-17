function teclado(botao) {
  var visor = document.querySelector("#visor");
  switch (botao) {
    case "1":
      visor.value = "1";
      break;
    case "2":
      visor.value = "2";
      break;
    case "3":
      visor.value = "3";
      break;
    case "4":
      visor.value = "4";
      break;
    case "5":
      visor.value = "5";
      break;
    case "6":
      visor.value = "6";
      break;
    case "7":
      visor.value = "7";
      break;
    case "8":
      visor.value = "8";
      break;
    case "9":
      visor.value = "9";
      break;
    case "0":
      visor.value = "0";
      break;
    case ",":
      visor.value = ",";
      break;
    default:
      alert("Ocorreu um erro");
  }
}

function limpar() {
  document.querySelector("#txtValorA").value = "";
  document.querySelector("#txtValorB").value = "";
  document.querySelector("#visor").value = "";
}

function backspace() {
  var visor = document.querySelector("#visor");
  if (!visor.value == "") {
    var array = [visor.value];
    console.log(array);
    array.splice(0, 1);
    document.querySelector("#visor").value = array;
    console.log(array);
  }
}

function formatarValor(valor) {
  return valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}

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
