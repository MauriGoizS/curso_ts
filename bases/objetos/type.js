"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Velocidad', 'Viajar en el tiempo'],
    };
    let superman = {
        name: 'Clark kent',
        age: 28,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    };
})();
