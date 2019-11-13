const suppliersReducer = ( state = {}, action ) => {
    switch (action.type) {
        case "UPDATE_SUPPLIERS": 
            return {
                ...state,
                suppliers: action.payload
            }
        default:
            return state;    
    }
}

export const updateSuppliers = data => {
    return async dispatch => {
        dispatch({
            type: "UPDATE_SUPPLIERS",
            payload: data
        });
    }
}

export default suppliersReducer;