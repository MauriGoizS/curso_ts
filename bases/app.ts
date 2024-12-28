(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum Power {
      aquaman = 1,
      batman = 4,
      flash = 7,
      superman = 10,
    }
    const fuerzaFlash: Power = Power.flash;
    const fuerzaSuperman: Power = Power.superman;
    const fuerzaBatman: Power =  Power.batman;
    const fuerzaAcuaman: Power = Power.aquaman;
  
    // Retorno de funciones
    function activar_batiseñal():string {
      return 'activada';
    }
  
    function pedir_ayuda(): void {
      console.log('Auxilio!!!');
    }
    pedir_ayuda();
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string ).length;
    console.log( largoDelPoder );
  
  
  })()
  
  