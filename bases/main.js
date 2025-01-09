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
(() => {
    const client = {
        name: 'Mauricio',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Otawa'
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Toronto',
            zip: 'K2S U2',
            id: 120
        }
    };
})();
//# sourceMappingURL=main.js.map