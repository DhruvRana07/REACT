const initialState = {
    count: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HANDLE_ADD':
            return {
                ...state,
                count: state.count + action.payload,
            };
        case 'HANDLE_REDUCE':
            return {
                ...state,
                count: state.count - action.payload,
            };
        case 'HANDLE_RESET':
            return {
                ...state,
                count: 0,
            };
        default:
            return state;
    }
};

export default counterReducer;
