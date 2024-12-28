"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName}  ${lastName}`;
    };
    const name = fullName('Mauricio', 'Goiz');
    console.log({ name });
})();
