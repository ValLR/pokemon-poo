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


function ultraViolence(){
	var data = document.getElementById("caja");
	var challenger = document.getElementById("fighter1").value;
	var opponent = document.getElementById("fighter2").value;
	var attackValue = prompt("Write your pokemon's attack points");
	var attack1 = new Pokemon(challenger,"color",attackValue);
	var attack2 = new Pokemon(opponent, "otro color", 57);

	attack1.atacar(attack2);

	if (attack2.vida < 1){
		data.innerHTML = attack1.nombre + " has attacked " + attack2.nombre + "! And now "+ attack2.nombre +" it's DEAD. You murderer!";
	}
	else{
	data.innerHTML = attack1.nombre + " has attacked " + attack2.nombre + "! And now "+ attack2.nombre +" has "+ attack2.vida + " life's points";
	}
}


var Pikachu = new Pokemon("Pikachu","amarillo", 55)
var Charmander = new Pokemon("Charmander", "rojo", 52)




var data = document.getElementById("caja");
//data.innerHTML += Charmander.mostrarPokemon();
//innetHTML es para enviar cosas de js a html