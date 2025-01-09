(() => {

    interface Xmen {
        name: string;
        realName: string;
        mutanPower( id: number ): string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {

        mutanPower( id: number ): string {
            return this.name + '' + this.realName;
        }

        constructor(
            public name: string,
            public realName: string,
            public age: number,
        ){}
        
    }

})()