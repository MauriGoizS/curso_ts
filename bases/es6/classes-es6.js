(() => {

    class Avenger {
        constructor( name = 'No name', power = 0 ) {
            this.name = name;
            this.power = power;
        }
    }


    class flyAvenger extends Avenger {
        constructor ( name, power ) {
            super( name, power )
            this.flyAvenger =  true
        }
    }


    const hulk = new Avenger('Hulk', 9001); 
    const falcon = new flyAvenger( 'Falcon', 50); 

    console.log( hulk );
    console.log( falcon );

})()