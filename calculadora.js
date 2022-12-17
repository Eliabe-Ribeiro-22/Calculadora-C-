// Functions

// Eventos de Teclado
function tecladoA(botao) {
  let valorLeft = document.querySelector("#txtValorLeft");
  switch (botao) {
    case "1":
      valorLeft.value = "1";
      break;
    case "2":
      valorLeft.value = "2";
      break;
    case "3":
      valorLeft.value = "3";
      break;
    case "4":
      valorLeft.value = "4";
      break;
    case "5":
      valorLeft.value = "5";
      break;
    case "6":
      valorLeft.value = "6";
      break;
    case "7":
      valorLeft.value = "7";
      break;
    case "8":
      valorLeft.value = "8";
      break;
    case "9":
      valorLeft.value = "9";
      break;
    case "0":
      valorLeft.value = "0";
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

// teclado para o valor do campo à direita

function tecladoRight(botao) {
  let valorRight = document.querySelector("#txtValorRight");
  switch (botao) {
    case "1":
      valorRight.value = "1";
      break;
    case "2":
      valorRight.value = "2";
      break;
    case "3":
      valorRight.value = "3";
      break;
    case "4":
      valorRight.value = "4";
      break;
    case "5":
      valorRight.value = "5";
      break;
    case "6":
      valorRight.value = "6";
      break;
    case "7":
      valorRight.value = "7";
      break;
    case "8":
      valorRight.value = "8";
      break;
    case "9":
      valorRight.value = "9";
      break;
    case "0":
      valorRight.value = "0";
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
  var valorLeft = document.querySelector("#txtValorLeft");
  // valor do input
  let numero = valorLeft.value;
  // Quantos caracteres
  let tamanho = numero.length;
  // Apagar o último caracter
  valorLeft.value = valor.substring(0, tamanho - 1);

  //valorLeft.value = "";
}

// Operações de cálculo
function calcular(operacao) {
  alert("entrou no calcular");
  let valorLeft = parseFloat(document.getElementById("txtValorA").value);
  var status = true;
  let valor = parseFloat(document.getElementById("txtValorB").value);

  let resultado;

  switch (operacao) {
    case "+":
      resultado = valorA + valorB;
      break;

    case "-":
      resultado = valorA - valorB;
      break;

    case "/":
      resultado = valorA / valorB;
      break;

    case "*":
      resultado = valorA * valorB;
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
    document.querySelector("#txtValorA").value = "";
    document.querySelector("#txtValorB").value = "";
  } else {
    alert("Ocorreu um erro ao calcular!");
  }
}

// Converter o resultado para string com 000.000,99
function formatarValor(valor) {
  return valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}
