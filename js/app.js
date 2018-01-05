//VARIABLES GLOBALES
var pantalla, valor1, valor2;

display = document.getElementById('display');
tecla = document.getElementsByClassName('tecla')

//ANIMACION PARA QUE LAS TECLAS SE HAGAN PEQUE;AS

function animacionTecla(i) {
    tecla[i].style.transform = "scale(0.7)";
      var dato = tecla[i]
      setTimeout (function(){dato.style.transform="scale(1.0)"}, 100);
  }



//LLANAR LA pantalla
//onoff=tecla[0]
tecla[0].onclick = function(e){
  pantalla = 0;
  valor1=0;
  valor2=0;
  display.innerHTML = pantalla;
}
//signo=tecla[1]



//numeros
tecla[12].onclick = function(e) {
  llenar(1);
  animacionTecla(12)
}
tecla[13].onclick = function(e) {
  llenar(2);
}
tecla[14].onclick = function(e) {
  llenar(3);
}
tecla[8].onclick = function(e) {
  llenar(4);
}
tecla[9].onclick = function(e) {
  llenar(9);
}
tecla[10].onclick = function(e) {
  llenar(6);
}
tecla[4].onclick = function(e) {
  llenar(7);
}
tecla[5].onclick = function(e) {
  llenar(8);
}
tecla[14].onclick = function(e) {
  llenar(3);
}
tecla[6].onclick = function(e) {
  llenar(9);
}
tecla[15].onclick = function(e) {
  llenar(0);
}

tecla[18].onclick = function(e){
  suma();
}
tecla[11].onclick = function(e){
  resta();
}

function suma() {
  valor1+=pantalla;
  pantalla=0;
  display.innerHTML = valor1;
}
function resta() {
  if (valor1==0) {
    valor1=pantalla;
    pantalla=0;
  }
  valor1=valor1-pantalla;
  pantalla=0;
  display.innerHTML = valor1;
}
raiz=tecla[2]
dividido=tecla[3]
multiplica=tecla[7]

punto=tecla[16]
igual=tecla[17]


function llenar(i) {
  pantalla*=10;
  pantalla+=i;
  display.innerHTML = pantalla;
}


/*
menos: function(){
this.animaciontecla("menos");
*/




/*
animaciontecla: function(tecla){
document.getElementById(tecla).style.transform="scale(0.9)";
setTimeout(function() {document.getElementById(tecla).style.transform="scale(1)";}, 200);
},
*/
