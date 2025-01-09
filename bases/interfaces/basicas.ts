(() => {

    interface Hero {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Velocidad', 'Viajar en el tiempo'],
    }

    let superman: Hero = {
        name: 'Clark kent',
        age: 28,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    }

})()