function Pokemon(nombre, color, poderDeAtaque){
	this.nombre = nombre;
	this.color = color;

	this.nivelDeAmistad = 0;

	this.vida = 100;
	this.poderDeAtaque = poderDeAtaque;

	this.mostrarPokemon = function(){
		console.log('Hola, soy:' + this.nombre + 'y soy de color: ' + this.color);
	}
		
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	}

	this.atacar = function(pokemon){
		return pokemon.vida = pokemon.vida - this.poderDeAtaque;
	}
}

function pelear(){
	var pokeUno = document.getElementById('pokemon-uno').value;
	var pokeDos = document.getElementById('pokemon-dos').value;

	if(pokeUno == pokeDos){
		alert("No puede peliar el mismo pokemón");
		return;
	}

	var ataque = prompt("Ingrese poder de ataque de pokémon peleador");
	var ataqueDos = prompt("ingrese poder de ataque de pokémon retador");
	

	var peleador = new Pokemon(pokeUno, 'color', ataque);
	var retador = new Pokemon(pokeDos, 'color', ataqueDos);
	

	var pelea = document.getElementById('arena');
	pelea.innerHTML = '<br>'+ peleador.nombre +' ataco a ' + retador.nombre + ' y '+ retador.nombre +' tiene una vida de ' + retador.atacar(peleador);
	
}


