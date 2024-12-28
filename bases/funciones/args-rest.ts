(() => {

    const fullName = ( firstName: string, ...restArgs: string[] ):string => {

        return `${ firstName } ${ restArgs.join(' ') }`;

    }

    const mau = fullName('Mauricio', 'Goiz', 'Sarmiento');

    console.log( { mau } );

})()