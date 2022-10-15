// root reducer
import events from "../events";

const initState = {
    count: 0,
    amount: 0
};

const price = 500;
const rootReducer = (state = initState, action) => {
    let newState = {};
    switch (action.type) {
        case events.INC:
            newState = {
                count: parseInt(state.count) + action.payload,
                amount: (parseInt(state.count) + action.payload) * price
            };
            break;
        case events.DESC:
            if (state === 0) {
                newState = state
            } else {
                newState = {
                    count: parseInt(state.count) - action.payload,
                    amount: (parseInt(state.count) - action.payload) * price
                };
            }
            break;
        case events.RESET:
            newState = {
                count: 0,
                amount: 0
            };
            break;
        default:
            newState = state;
            break;
    }
    return newState; //update state
}

export default rootReducer;