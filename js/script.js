"use strict"

//VARIABLES PARA LOS BOTONES QUE COMPONEN PARTE DE LA CALCULADORA
let calculadora = document.getElementsByClassName("calculadora");
let resultado = document.getElementById("resultado");

let borrar = document.getElementById("borrar");
let C = document.getElementById("C");
let CE = document.getElementById("CE");
let M = document.getElementById("M");

//Numeros
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let cero = document.getElementById("cero");

let punto = document.getElementById("punto");
let igual = document.getElementById("igual");


let cientifico = document.getElementsByClassName("btn-cien"); //BOTON QUE COGE TODOS LOS BOTONES CIENTIFICOS
let select = document.getElementById("modo");

//EVENTO QUE AL CAMBIAR EL MODO DEL SELECT NOS MUESTRA LOS BOTONES DE LA CALCULADORA CIENTIFICA O LOS ESCONDE SI 
//USAMOS EL MODO BASICO.
select.addEventListener('change', () =>{
	for(let i = 0; i < cientifico.length; i++){ //FOR QUE RECORRE TODOS LOS BOTONES DE LA CALCULADORA
		if(select.value == 2){
			cientifico[i].style.visibility ="visible";
		} else {
			cientifico[i].style.visibility = "hidden";
		}
	}
});

//EVENTO QUE AL CLICKAR EN EL BOTON DE BORRAR HACE USO DE LA FUNCION SLICE Y VA QUITANDO LOS NUMEROS QUE SE HAYAN PUESTO
 borrar.addEventListener("click", function(event){
 	resultado.innerHTML = resultado.innerHTML.slice(0, resultado.innerHTML.length-1);
 });




