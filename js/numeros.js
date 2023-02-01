"use strict"
//EVENTOS PARA LOS NUMEROS DEL 0 AL 9 QUE LOS PONE EN PANTALLA, LO MISMO CON LAS CONSTANTES e y PI

uno.addEventListener("click", function(event){
	resultado.innerHTML += 1;
});

dos.addEventListener("click", function(event){
	resultado.innerHTML += 2;
});

tres.addEventListener("click", function(event){
	resultado.innerHTML += 3;
});

cuatro.addEventListener("click", function(event){
	resultado.innerHTML += 4;
});

cinco.addEventListener("click", function(event){
	resultado.innerHTML += 5;
});

seis.addEventListener("click", function(event){
	resultado.innerHTML += 6;
});

siete.addEventListener("click", function(event){
	resultado.innerHTML += 7;
});

ocho.addEventListener("click", function(event){
	resultado.innerHTML += 8;
});

nueve.addEventListener("click", function(event){
	resultado.innerHTML += 9;
});

cero.addEventListener("click", function(event){
	resultado.innerHTML += 0;
});

//CONSTANTE E
e.addEventListener("click", function(event){
	resultado.innerHTML = Math.E;
});
//CONSTANTE PI
pi.addEventListener("click", function(event){
	resultado.innerHTML = Math.PI;
});

//EVENTO PARA EL PUNTO, PARA ESTO REVISAMOS QUE EL OPERANDO NO TENGA YA PUESTO UN ".", EN CASO DE QUE NO TENGA "."
//PODEMOS PONER UNO.
punto.addEventListener("click", function(event){
	let revisa = resultado.innerHTML.split("");
	let puntea = false;

	for(let i = 0; i < revisa.length; i++){
		if (revisa[i] == '.') {
			puntea = true;
		}
	}

	if (puntea == false) {
		resultado.innerHTML += ".";
	}
})