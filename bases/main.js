"use strict";
(() => {
    class Avenger {
        static getAvAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('AntMan', 'Capitan', 'Scott Lang');
})();
(() => {
    class Avenger {
        constructor(name, realname) {
            this.name = name;
            this.realname = realname;
            console.log('Constructor Avenger llamado');
        }
        getFullName() {
            return `${this.name} ${this.realname}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamdo');
        }
        get fullName() {
            return `${this.name} - ${this.realname}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe de ser mayor de 3 letras');
            }
            this.name = name;
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine.fullName);
    wolverine.fullName = 'Ma';
    console.log(wolverine.fullName);
})();
//# sourceMappingURL=main.js.map