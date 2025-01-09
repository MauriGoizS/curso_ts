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
    class Mutant {
        mutanPower(id) {
            return this.name + '' + this.realName;
        }
        constructor(name, realName, age) {
            this.name = name;
            this.realName = realName;
            this.age = age;
        }
    }
})();
(() => {
    const client = {
        name: 'Mauricio',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Otawa'
        },
        getFullAddress(id) {
            return 'Hola';
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Toronto',
            zip: 'K2S U2',
            id: 120
        },
        getFullAddress(id) {
            return 'Hola';
        }
    };
})();
//# sourceMappingURL=main.js.map