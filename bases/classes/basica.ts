(() => {

    class Avenger {

        // private name: string;
        // private team: string;
        // public realName?: string;
        static avgAge: number = 35;
        static getAvAge() {
            return this.name;
        }

        constructor(
            private name: string,
            private team: string, 
            public realName?: string,
        ) {}

        public bio() {
            return `${ this.name } (${ this.team })`;
        }

    }

    const antman: Avenger = new Avenger('AntMan', 'Capitan', 'Scott Lang');
    // console.log( antman );

    // console.log( Avenger.getAvAge() );

})()