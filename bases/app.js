"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let Power;
    (function (Power) {
        Power[Power["aquaman"] = 1] = "aquaman";
        Power[Power["batman"] = 4] = "batman";
        Power[Power["flash"] = 7] = "flash";
        Power[Power["superman"] = 10] = "superman";
    })(Power || (Power = {}));
    const fuerzaFlash = Power.flash;
    const fuerzaSuperman = Power.superman;
    const fuerzaBatman = Power.batman;
    const fuerzaAcuaman = Power.aquaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    pedir_ayuda();
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
