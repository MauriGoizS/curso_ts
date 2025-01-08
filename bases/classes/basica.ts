(() => {

    class Avenger {

        // private name: string;
        // private team: string;
        // public realName?: string;
        static avgAge: number = 35;

        constructor(
            private name: string,
            private team: string, 
            public realName?: string,
        ) {}

    }

    const antman: Avenger = new Avenger('AntMan', 'Capitan', 'Scott Lang');

    console.log( antman );

})()