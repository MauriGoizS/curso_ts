// import { getPokemon } from "./generics.ts/get-pokemon";

import { Pokemon } from "./decorators/pokemon-class";


// getPokemon( 4 )
//     .then( pokemon => console.log( pokemon.sprites.front_default ) )
//     .catch( error => console.error( error ) )
//     .finally( () => console.log('Fin de getPokemon'))


const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu'

// charmander.savePokemonToDB(80);

charmander.publicApi = 'https://mauricio-goiz.com';
console.log( charmander );