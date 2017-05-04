function Pokemon(nombre,color,poderDeAtaque){
	this.nombre = nombre;
	this.color = color;

	this.nivelDeAmistad = 0;

	this.vida = 100;
	this.poderDeAtaque = poderDeAtaque;

	this.mostrarPokemon = function(){
		return("Hola, soy " + this.nombre + " y soy de color: "+ this.color)
	}

	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor
		return("El nivel de amistad de " + this.nombre + "es de " + this.nivelDeAmistad)
	}

	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque
		return("El ataque de "+ this.pokemon + " disminuyó a: " + pokemon.vida + " la vida de su oponente")
	}
}

function statement(){
	var pokemon1 = document.getElementById("fighter1");
	var pokemon2 = document.getElementById("fighter2")
}
var Pikachu = new Pokemon("Pikachu","amarillo", 55)
var Charmander = new Pokemon("Charmander", "rojo", 52)

var data = document.getElementById("caja");
//data.innerHTML += Charmander.mostrarPokemon();
//innetHTML es para enviar cosas de js a html