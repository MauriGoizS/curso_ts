(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address;
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
        }
    }

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Toronto',
            zip: 'K2S U2',
            id: 120
        }
    }

})()