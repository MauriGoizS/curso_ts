"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const mau = fullName('Mauricio', 'Goiz', 'Sarmiento');
    console.log({ mau });
})();
