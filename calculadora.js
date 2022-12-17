// Funções da Calculadora

// Eventos de Teclado
//  Teclado numérico para o valor do campo à direita
function tecladoLeft(botao) {
  let valorLeft = document.querySelector("#txtValorLeft");
  switch (botao) {
    case "1":
      if (!valorLeft.value == "") {
        valorLeft.value += "1";
      } else {
        valorLeft.value = "1";
      }
      break;
    case "2":
      if (!valorLeft.value == "") {
        valorLeft.value += "2";
      } else {
        valorLeft.value = "2";
      }
      break;
    case "3":
      if (!valorLeft.value == "") {
        valorLeft.value += "3";
      } else {
        valorLeft.value = "3";
      }
      break;
    case "4":
      if (!valorLeft.value == "") {
        valorLeft.value += "4";
      } else {
        valorLeft.value = "4";
      }
      break;
    case "5":
      if (!valorLeft.value == "") {
        valorLeft.value += "5";
      } else {
        valorLeft.value = "5";
      }
      break;
    case "6":
      if (!valorLeft.value == "") {
        valorLeft.value += "6";
      } else {
        valorLeft.value = "6";
      }
      break;
    case "7":
      if (!valorLeft.value == "") {
        valorLeft.value += "7";
      } else {
        valorLeft.value = "7";
      }
      break;
    case "8":
      if (!valorLeft.value == "") {
        valorLeft.value += "8";
      } else {
        valorLeft.value = "8";
      }
      break;
    case "9":
      if (!valorLeft.value == "") {
        valorLeft.value += "9";
      } else {
        valorLeft.value = "9";
      }
      break;
    case "0":
      if (!valorLeft.value == "") {
        valorLeft.value += "0";
      } else {
        valorLeft.value = "0";
      }
      break;
    case ",":
      if (!valorLeft.value == "") {
        valorLeft.value += ",";
      } else {
        valorLeft.value = "0,";
      }
      break;
    default:
      alert("Ocorreu um erro");
  }
  document.querySelector("#visor").value = "";
}

//  Teclado numérico para o valor do campo à direita
function tecladoRight(botao) {
  let valorRight = document.querySelector("#txtValorRight");
  switch (botao) {
    case "1":
      if (!valorRight.value == "") {
        valorRight.value += "1";
      } else {
        valorRight.value = "1";
      }
      break;
    case "2":
      if (!valorRight.value == "") {
        valorRight.value += "2";
      } else {
        valorRight.value = "2";
      }
      break;
    case "3":
      if (!valorRight.value == "") {
        valorRight.value += "3";
      } else {
        valorRight.value = "3";
      }
      break;
    case "4":
      if (!valorRight.value == "") {
        valorRight.value += "4";
      } else {
        valorRight.value = "4";
      }
      break;
    case "5":
      if (!valorRight.value == "") {
        valorRight.value += "5";
      } else {
        valorRight.value = "5";
      }
      break;
    case "6":
      if (!valorRight.value == "") {
        valorRight.value += "6";
      } else {
        valorRight.value = "6";
      }
      break;
    case "7":
      if (!valorRight.value == "") {
        valorRight.value += "7";
      } else {
        valorRight.value = "7";
      }
      break;
    case "8":
      if (!valorRight.value == "") {
        valorRight.value += "8";
      } else {
        valorRight.value = "8";
      }
      break;
    case "9":
      if (!valorRight.value == "") {
        valorRight.value += "9";
      } else {
        valorRight.value = "9";
      }
      break;
    case "0":
      if (!valorRight.value == "") {
        valorRight.value += "0";
      } else {
        valorRight.value = "0";
      }
      break;
    case ",":
      if (!valorRight.value == "") {
        valorRight.value += ",";
      } else {
        valorRight.value = "0,";
      }
      break;
    default:
      alert("Ocorreu um erro");
  }
  document.querySelector("#visor").value = "";
}

// Limpar e BackSpace
function limpar() {
  document.querySelector("#txtValorLeft").value = "";
  document.querySelector("#txtValorRight").value = "";
  document.querySelector("#visor").value = "";
}

function backspace() {
  // txtValorLeft
  var campoLeft = document.querySelector("#txtValorLeft");
  let numeroLeft = campoLeft.value;
  let tamanhoLeft = numeroLeft.length;
  campoLeft.value = numeroLeft.substring(0, tamanhoLeft - 1);

  // txtValoRight
  var campoRight = document.querySelector("#txtValorRight");
  let numeroRight = campoRight.value;
  let tamanhoRight = numeroRight.length;
  campoRight.value = numeroRight.substring(0, tamanhoRight - 1);
}

// Operações de cálculo
function calcular(operacao) {
  alert("entrou no calcular");
  let valorLeft = parseFloat(document.getElementById("txtValorLeft").value);
  var status = true;
  let valorRight = parseFloat(document.getElementById("txtValorRight").value);

  let resultado;

  switch (operacao) {
    case "+":
      resultado = valorLeft + valorRight;
      break;

    case "-":
      resultado = valorLeft - valorRight;
      break;

    case "/":
      resultado = valorLeft / valorRight;
      break;

    case "*":
      resultado = valorLeft * valorRight;
      break;
    case "quadrado":
      resultado = Math.sqrt(valorLeft);
      break;
    case "potencia":
      resultado = Math.pow(valorLeft, 2);
      break;
    case "fatorial":
      var fatorial = 1;
      for (i = valorLeft; i > 1; i--) {
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
    document.querySelector("#txtvalorLeft").value = "";
    document.querySelector("#txtvalorRight").value = "";
  } else {
    alert("Ocorreu um erro ao calcular!");
  }
}

// Converter o resultado para string com 000.000,99
function formatarValor(valor) {
  return valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}
