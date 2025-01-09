(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress( id: string ): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Mauricio',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Otawa'
        },
        getFullAddress( id: string ) {
            return 'Hola';
        }
    }

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Toronto',
            zip: 'K2S U2',
            id: 120
        },
        getFullAddress( id: string ) {
            return 'Hola';
        }
    }

})()