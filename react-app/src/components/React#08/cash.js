
function cash(amount,action){
    switch(action.type){
        case 'IMPORT':
            return amount + action.money;
        case 'EXPORT':
            return amount - action.money;
        default:
            return amount;
    }
}

export default cash;