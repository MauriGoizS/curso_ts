import { printObject, genericFunction, genericFunctionArrow } from "./generics.ts/generics";

// printObject( 23 );
// printObject( new Date() );
// printObject( { a:1, b:2, c:3, }  );
// printObject( [1,2,3,4,5,6,7,8,9,10] );
// printObject( 'Hola Mundo' );
const name: string = 'Mauricio';

console.log( genericFunctionArrow(3.1416).toFixed(2) );
console.log( genericFunctionArrow( name ).toUpperCase() );
console.log( genericFunctionArrow( new Date() ).getDate() );