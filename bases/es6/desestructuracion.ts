(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.324324,
    }

    // const { poder, vision } = avengers;
    // console.log( poder.toFixed(2), vision.toUpperCase());

    const printAvenger = ( { ironman, ...resto }: Avengers ) => {
        console.log( ironman, resto );
    }

    // printAvenger( avengers );


    const avengersArr: [string, boolean, number] = ['Cap. America', true, 150.33];

    const [ capitan, ironman, seriaUnNumero ] = avengersArr;
    // console.log({ ironman, capitan });

})()