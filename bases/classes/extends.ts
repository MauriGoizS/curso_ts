(() => {

    class Avenger {
        constructor(
            public name: string,
            public realname: string,
        ) {
            console.log('Constructor Avenger llamado');
        }

        protected getFullName() {
            return `${ this.name } ${ this.realname }`
        }
    }

    class Xmen extends Avenger {
        constructor (
            name: string,
            realName: string,
            public isMutant: Boolean,
        ) {
            super( name, realName )
            console.log('Constructor Xmen llamdo');
        }

        getFullNameDesdeXmen() {
            console.log( super.getFullName() );
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log( wolverine );
    wolverine.getFullNameDesdeXmen();
})()