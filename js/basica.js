"use strict"

//BOTONES PARA LA OPERACIONES DE LA CALCULADORA BASICA
let division = document.getElementById("division");
let multiplicacion = document.getElementById("multiplicacion");
let resta = document.getElementById("resta");
let suma = document.getElementById("suma");
let porcentaje = document.getElementById("porcentaje");
let raiz = document.getElementById("raiz");
let masMenos = document.getElementById("masMenos");
let inversa = document.getElementById("inversa");
let basicos = document.getElementsByClassName("btn-bas");

let memoria=0;

//FUNCION QUE DEJA EL RESULTADO VACIO
function limpiar(){
	resultado.innerHTML="";
}

//FUNCION QUE RESETEA TODO LOS OPERANDOS, RESULTADO Y SUBRESULTADO DE LA CALCULADORA
function reset(){
	resultado.innerHTML="";
	subresultado.innerHTML="";
	operando1 = 0;
	operando2 = 0;
	operacion = "";
	memoria = 0;
}

/**
 * PARA EL USO DE LA SUMA, RESTA, DIVISION, MULTIPLICACION Y POTENCIA BASE HACEMOS USO DE UNA FUNCION 
 * QUE LE PASAMOS EL PRIMER OPERANDO, EL SEGUNDO OPERANDO Y EL TIPO DE OPERACION QUE QUEREMOS HACER.
 * DESPUES DE PULSAR UNO DE ESTOS BOTONES LIMPIAMOS LA PANTALLA PARA PONER EL SEGUNDO OPERANDO
 * */

suma.addEventListener("click", function(event){
	operando1 = resultado.innerHTML;
	operacion = "+";
	limpiar();
});

resta.addEventListener("click", function(event){
	operando1 = resultado.innerHTML;
	operacion = "-";
	limpiar();
});

multiplicacion.addEventListener("click", function(event){
	operando1 = resultado.innerHTML;
	operacion = "*";
	limpiar();
});

division.addEventListener("click", function(event){
	operando1 = resultado.innerHTML;
	operacion = "/";
	limpiar();
});

//FUNCION QUE SE ENCARGA DE PONER EL % EN EL SEGUNDO OPERANDO PARA LAS OPERACIONES CON PORCENTAJE

porcentaje.addEventListener("click", function(event){
	let revisa = resultado.innerHTML.split("");
	let porc = false;

	for(let i = 0; i < revisa.length; i++){
		if (revisa[i] == '%') {
			porc = true;
		}
	}

	if (porc == false) {
		resultado.innerHTML += "%";
	}
});

//EVENTO PARA LA RAIZ CUADRADA EN LA QUE UTILIZAMOS LA FUNCION SQRT PARA HACERLA

raiz.addEventListener("click", function(event){
	operando1 = resultado.innerHTML;
	solucion = Math.sqrt(operando1);

	//SI PONEMOS UN NUMERO NEGATIVO NOS DEVUELVE isNaN, PARA ESTOS CASOS MOSTRAMOS UN MENSAJE
	// DE ERROR PARA DECIR QUE NO ES VALIDO ESTO PARA HACER LA RAIZ CUADRADA
	if(isNaN(solucion)){
		solucion = "negative number";
		setTimeout(reset, 2000);
	}
	solucion = Number(solucion.toFixed(2));
	resultado.innerHTML = solucion;
	subresultado.innerHTML = "√"+operando1;
	memoria = solucion;
});

//EVENTO PARA EL BOTON +/- PARA CAMBIAR EL SIGNO DEL OPERANDO, SIMPLEMENTE MULTIPLICAMOS EL NUMERO POR -1
masMenos.addEventListener("click", function(event){
	resultado.innerHTML = resultado.innerHTML * (-1);
});

//EVENTO PARA HACER EL INVERSO DE UN NUMERO
inversa.addEventListener("click", function(event){
	operando1 = resultado.innerHTML;
	solucion = parseFloat(1/operando1);

	//EN CASO DE QUE EL OPERANDO SEA 0 ESTE NOS DEVUELVE INFINITO, POR LO QUE AL CABO DE 2 SEGUNDOS MOSTRAMOS QUE 
	//ES INFINITO Y RESETEAMOS
	if(solucion == "Infinity"){
		setTimeout(reset, 2000);	
	}

	solucion = Number(solucion.toFixed(2));
	resultado.innerHTML = solucion;
	subresultado.innerHTML = 1+"/"+operando1
	memoria = solucion;
});

//EVENTO PARA EL BOTON = QUE INICIA LA FUNCION RESOLVER;
igual.addEventListener("click", function(event){
	operando2 = resultado.innerHTML;
	resolver();
});

//EVENTO PARA EL BOTON C QUE HACE USO DE LA FUNCION LIMPIAR
C.addEventListener("click", limpiar);

//EVENTO PARA EL BOTON CE QUE RESETEA CON LA FUNCION RESET
CE.addEventListener("click", reset);

//EVENTO PARA LA FUNCION M QUE MUESTRA EL RESULTADO DE LA ULTIMA OPERACION
M.addEventListener("click", function(event){
	resultado.innerHTML = memoria;
});

