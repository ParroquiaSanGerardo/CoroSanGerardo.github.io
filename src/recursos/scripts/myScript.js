function tamVentana() {
  var tam;
  if (typeof window.innerWidth != 'undefined') {
    tam = [window.innerWidth, window.innerHeight];
  }
  else if (typeof document.documentElement != 'undefined'
    && typeof document.documentElement.clientWidth !=
    'undefined' && document.documentElement.clientWidth != 0) {
    tam = [
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    ];
  }
  else {
    tam = [
      document.getElementsByTagName('body')[0].clientWidth,
      document.getElementsByTagName('body')[0].clientHeight
    ];
  }
  return tam;
}



function tamanyo() {

  var tam = tamVentana();
  //Tamaño de la pantalla
  //document.getElementById("alto").innerHTML = window.screen.availHeight;
  //document.getElementById("ancho").innerHTML = window.screen.availWidth;
  document.getElementById("ancho").innerHTML = tam[0];
  document.getElementById("alto").innerHTML = tam[1];

}

window.addEventListener("load", tamanyo);
window.addEventListener("resize", tamanyo);

