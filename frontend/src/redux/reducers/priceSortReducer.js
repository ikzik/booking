const initialState = {
    sort : localStorage.getItem('sort') || 'ASC'
}

const priceSortReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case "UPDATE_SORT": 
            return {
                ...state,
                sort: action.payload
            }
        default:
            return state;    
    }
}

export const updatePriceSort = data => {
    return async dispatch => {
        dispatch({
            type: "UPDATE_SORT",
            payload: data
        });
    }
}

export default priceSortReducer;