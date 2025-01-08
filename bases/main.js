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
    console.log(antman);
    console.log(Avenger.getAvAge());
})();
//# sourceMappingURL=main.js.map