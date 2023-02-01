"use strict"

let subresultado = document.getElementById("subresultado");
let operando1 = 0;
let operando2 = 0;
let operacion = "";
let solucion;

//FUNCION QUE RESUELVE LAS OPERACIONES QUE NECESITAN 2 OPERANDOS
function resolver(){
	
	//ANTES DE INICIAR NINGUNA OPERACION REVISAMOS QUE NO HAYA UN "%", YA QUE EN CASO DE QUE HAYA UNO DEBEMOS 
	//HACER UNA OPERACION DISTINTA
	let revisa = resultado.innerHTML.split("");
	let porc = false;

	for(let i = 0; i < revisa.length; i++){
		if (revisa[i] == '%') {
			porc = true;
		}
	}

	if(porc == true){ // SI TIENE UN "%" LO ELIMINAMOS PARA QUE NO DE PROBLEMAS EN LAS CUENTAS
		operando2 = operando2.slice(0, operando2.length - 1);
	}
	
	//DEPENDIENDO DEL TIPO DE OPERACION HACEMOS USO DE UN SWITCH PARA HACER DISTINTAS OPERACIONES
	//PARA LA SUMA, RESTA Y MULTIPLICACION HAY DOS TIPOS DE OPERACIONES DEPENDIENDO SI EL OPERADOR
	//LLEVA UN PORCENTAJE
	switch (operacion) {
		case "+":

		if(porc == true){
			solucion = parseFloat(operando1) + parseFloat((operando1*operando2)/100);
			operando2 +=  "%"; 
		}else {
			solucion = parseFloat(operando1) + parseFloat(operando2);
		}
		break;
		case "-":
		if(porc == true){
			solucion = parseFloat(operando1) - parseFloat((operando1*operando2)/100);
			operando2 +=  "%"; 
		}else {
			solucion = parseFloat(operando1) - parseFloat(operando2);
		}
		solucion = parseFloat(operando1) - parseFloat(operando2);
		break;
		case "*":
		if(porc == true){
			solucion = parseFloat((operando1*operando2)/100);
			operando2 +=  "%"; 
		}else {
			solucion = parseFloat(operando1) * parseFloat(operando2);
		}
		break;
		case "/":
		solucion = parseFloat(operando1) / parseFloat(operando2);
		break;
		case "^": 
		solucion = parseFloat(Math.pow(operando1, operando2));
		break;
		case "modulo":
		solucion =  solucion = parseFloat(operando1) % parseFloat(operando2);
		default:
		break;
	}

	solucion = Number(solucion.toFixed(2)); //REDONDEAMOS EL RESULTADO A DOS DECIMALES
	
	if(isNaN(solucion)){ //EN CASO DE QUE DEVUELVA ISNAN MOSTRAMOS UN MENSAJE DE ERROR
		solucion = "**ERROR**";
		setTimeout(reset, 2000);
	}

	if(solucion == "Infinity"){
		setTimeout(reset, 2000);	
	}

	
	let ope = operando1 + " " + operacion + " " + operando2; //ESQUEMA DE LA OPERACION QUE HICIMOS QUE MOSTRAMOS EN SUBRESULTADO
	reset();
	memoria = solucion;
	subresultado.innerHTML += ope;
	resultado.innerHTML = solucion;
}