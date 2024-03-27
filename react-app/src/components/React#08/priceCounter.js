function berger(state,action){
    
    switch(action.type){
        case 'berger':
            return state + action.price;
        case 'fried':
            return state + action.price;
        case 'cola':
            return state + action.price;
        default:
            return state;
    }
}

export default berger;