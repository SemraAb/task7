

let initialState = [];


const itemReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_ALL_DATA':
            state = action.payload;
            return [...state];
        case 'ADD_PRICE':
            const index1 = state.indexOf(action.payload);
            state[index1].price++;
            return [...state]; 
        case 'REMOVE_ITEM':
            const index2 = state.indexOf(action.payload);
            state.splice(index2, 1);

            return [...state];
        default:
            return state;
    }
}

export default itemReducer;