"use strict";
(() => {
    const addnumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    //! let myFunction: (y: number, z:number) => number;
    //? let myFunction: (y: string) => string;
    let myFunction;
    //* myFunction = 10;
    //* console.log( myFunction );
    //! myFunction = addnumbers;
    //! console.log( myFunction(1, 2) );
    //? myFunction = greet;
    //? console.log( myFunction('Mauricio') );
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
