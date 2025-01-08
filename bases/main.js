"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('AntMan', 'Capitan', 'Scott Lang');
    console.log(antman);
})();
//# sourceMappingURL=main.js.map