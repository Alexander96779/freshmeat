const initialState = {
    isLoading: false,
    data: [],
    error: null
}

const makeNewOrder = (state = initialState, action) => {
    const { type, payload, error } = action;

    switch(type) {
        case 'ITEM_ORDER_START': {
            return {
                ...state,
                isLoading: true,
            };
        }
        case 'ITEM_ORDER_SUCCESS': {
            return {
                ...state,
                data: payload,
                isLoading: false
            };
        }
        case 'ITEM_ORDER_ERROR': {
            return {
                ...state,
                error: error,
                isLoading: false
            }
        }
        default: {
            return state;
        }
    }
}

export default makeNewOrder;