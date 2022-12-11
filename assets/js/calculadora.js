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
  document.querySelector("#visor").value = "";
}

function backspace() {
  var visor = document.querySelector("#visor");
  if (!visor.value == "") {
    var array = [visor.value]
    console.log(array);
    array.splice(0, 1);
    document.querySelector("#visor").value = array
    console.log(array);
  }
}
