(() => {

    let flash: { name: string, age?: number, powers: string[],  getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Velocidad', 'Viajar en el tiempo'],
    }

    let superman: { name: string, age?: number, powers: string[],  getName?: () => string } = {
        name: 'Clark kent',
        age: 28,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    }

})()