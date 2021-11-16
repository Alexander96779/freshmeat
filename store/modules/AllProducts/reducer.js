const initialState = {
    isLoading: false,
    payload: [],
    error: null
}

const getAllProducts = (state = initialState, action) => {
    const { type, payload, error } = action;

    switch(type) {
        case 'VIEW_PRODUCTS_START': {
            return {
                ...state,
                isLoading: true
            };
        }
        case 'VIEW_PRODUCTS_SUCCESS': {
            return {
                ...state,
                payload: payload,
                isLoading: false
            };
        }
        case 'VIEW_PRODUCTS_ERROR': {
            return {
                ...state,
                error: error,
                isLoading: false
            };
        }
        default: {
            return state;
        }
    }
}

export default getAllProducts;