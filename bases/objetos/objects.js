"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Velocidad', 'Viajar en el tiempo'],
    };
    flash = {
        name: 'Clark kent',
        age: 28,
        powers: ['Super fuerza'],
        getNombre() {
            return this.name;
        }
    };
})();
