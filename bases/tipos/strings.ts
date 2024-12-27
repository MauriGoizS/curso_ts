(()  => {

    const batman: string  = 'Batman';
    const linternaVerde: string  = "LinternaVerde";
    const volcaNegro: string = `Héroe: Volcan Negro`;
    
    console.log( `I am  + ${ batman }` );
    console.log( batman.toUpperCase() );
    console.log( batman[10]?.toUpperCase() || 'No está presente' );

})()