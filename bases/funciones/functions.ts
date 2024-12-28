(() => {

    const hero = 'Flash';

    function returnName():string {
        return hero;
    }  

    const activateBatisignal = ():string => {
        return '!Batisignal activada¡';
    } 

    console.log( typeof activateBatisignal);

    const heroName = returnName();

})()