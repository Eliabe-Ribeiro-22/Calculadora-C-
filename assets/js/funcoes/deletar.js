function limpar() {
  document.querySelector("#txtValorA").value = "";
  document.querySelector("#txtValorB").value = "";
  document.querySelector("#visor").value = "";
}

function backspace() {
  var visor = document.querySelector("#visor");
  if (!(visor.value == "")) {
    if (visor.value.lenght > 1) {
      var array = [visor.value];
      console.log(array);
      array.splice(0, 1);
      document.querySelector("#visor").value = array;
      console.log(array);
    } else {
      visor.value = "";
    }
  }
}
