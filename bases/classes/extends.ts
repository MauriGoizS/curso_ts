(() => {

    class Avenger {
        constructor(
            public name: string,
            public realname: string,
        ) {
            // console.log('Constructor Avenger llamado');
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
            // console.log('Constructor Xmen llamdo');
        }

        get fullName() {
            return `${ this.name } - ${ this.realname }`;
        }

        set fullName( name: string ) {

            if ( name.length < 3 ) {
                throw new Error('El nombre debe de ser mayor de 3 letras');
            } 

            this.name = name;
        }

        getFullNameDesdeXmen() {
            // console.log( super.getFullName() );
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    // console.log( wolverine.fullName );

    // wolverine.fullName = 'Ma';
    // console.log( wolverine.fullName );
    // wolverine.getFullNameDesdeXmen();
})()