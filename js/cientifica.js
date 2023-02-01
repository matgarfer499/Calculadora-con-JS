"use strict"

//VARIABLES QUE COGEN LOS BOTONES DE LA CALCULADORA CIENTIFICA
let log = document.getElementById("log");
let mod = document.getElementById("mod");
let Rnd = document.getElementById("Rnd");
let ln = document.getElementById("ln");
let potencia = document.getElementById("potencia");
let e = document.getElementById("e");
let pi = document.getElementById("pi");
let potenciaBase = document.getElementById("potenciaBase");
let factorial = document.getElementById("factorial");
let coseno = document.getElementById("coseno");
let seno = document.getElementById("seno");
let tangente = document.getElementById("tan");

let sol;

/**
 * PARA REDONDEAR LOS NUMEROS HACEMOS USO DE LA FUNCION NUMBER("VARIABLE".TOFIXED(2))
 * LA CUAL TOFIXED SE ENCARGA DE QUE TENGA 2 DECIMALES PERO ESTO HACE QUE LO CONVIERTA EN STRING
 * POR LO QUE USANDO LA FUNCION NUMBER LO CAMBIAMOS Y LO VOLVEMOS A CONVERTIR EN UN NUMERO
 */

//EVENTO PARA CALCULAR EL MODULO DE DOS OPERANDOS
mod.addEventListener("click", function(event){
	operando1 = resultado.innerHTML;
	operacion = "modulo";
	limpiar();
});

//EVENTO QUE AL PULSAR EL BOTON LOG NOS HACE EL LOGARITMO NEPERIANO DE DICHO NUMERO
log.addEventListener("click", function(event){
	operando1 = resultado.innerHTML;
	sol = parseFloat(Math.log(operando1)/Math.log(10));

	sol = Number(sol.toFixed(2));
	resultado.innerHTML = sol;
	subresultado.innerHTML = "log "+operando1;
	memoria = sol;
});

//EVENTO QUE AL CLICKAR ln NOS HACE EL LOGARITMO NATURAL DEL NUMERO QUE PONGAMOS
ln.addEventListener("click", function(event){
	operando1 = resultado.innerHTML;
	sol = parseFloat(Math.log(operando1)/Math.log(Math.E));

	sol = Number(sol.toFixed(2));
	resultado.innerHTML = sol;
	subresultado.innerHTML = "ln "+operando1;
	memoria = sol;
});

//EVENTO PARA EL BOTON ! LA CUAL NOS HACE EL FACTORIAL
factorial.addEventListener("click", function(event){
	operando1 = resultado.textContent;
	sol = 1;
	for(let i = operando1; i > 0; i--){
		sol *= i;

	}
// EN CASO DE QUE NOS DE UN NUMERO MUY GRANDE Y NOS DEVUELVA INFINITO MOSTRAMOS 
//EL RESULTADO DURANTE 2 SEGUNDOS Y RESETEAMOS LA MEMORIA DE LA CALCULADORA
	if(sol == "Infinity"){ 
		setTimeout(reset, 2000);	
	}
	sol = Number(sol.toFixed(2));
	resultado.innerHTML = sol;
	memoria = sol;
});

//EVENTO PARA EL BOTON DE POTENCIA BASE 2 Y EXPONENTE A ELEGIR
potencia.addEventListener("click", function(event) {
	operando1 = resultado.innerHTML;
	sol = Math.pow(2, operando1);

	sol = Number(sol.toFixed(2));
	resultado.innerHTML = sol;
	subresultado.innerHTML = 2+"^"+operando1;
	memoria = sol;
});

//EVENTO PARA EL BOTON DE POTENCIA EN EL QUE ELEGIMOS NOSOTROS LA BASE
potenciaBase.addEventListener("click", function(event) {
	operando1 = resultado.innerHTML;
	operacion = "^";
	limpiar();
});

//EVENTOS PARA EL BOTON DE COSENO, SENO Y TANGENTE QUE USA SUS RESPECTIVAS FUNCIONES PARA HACER LA OPERACIÓN

coseno.addEventListener("click", function(event){
	operando1 = resultado.innerHTML;
	sol = parseFloat(Math.cos(operando1));

	sol = Number(sol.toFixed(2));
	resultado.innerHTML = sol;
	subresultado.innerHTML = "cos("+operando1+")";
	memoria = sol;
});

seno.addEventListener("click", function(event){
	operando1 = resultado.innerHTML;
	sol = parseFloat(Math.sin(operando1));

	sol = Number(sol.toFixed(2));
	resultado.innerHTML = sol;
	subresultado.innerHTML = "sen("+operando1+")";
	memoria = sol;
});

tangente.addEventListener("click", function(event){
	operando1 = resultado.innerHTML;
	sol = parseFloat(Math.tan(operando1));

	sol = Number(sol.toFixed(2));
	resultado.innerHTML = sol;
	subresultado.innerHTML = "tan("+operando1+")";
	memoria = sol;
});

//EVENTO PARA EL BOTON RND QUE GENERA UN NUMERO ALEATORIO
Rnd.addEventListener("click", function(event){
	resultado.innerHTML = Math.floor(Math.random() * 100000000);
});