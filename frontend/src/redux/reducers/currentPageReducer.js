const initialState = {
    page : localStorage.getItem('page') || 1
}

const currentPageReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case "UPDATE_CURRENTPAGE": 
            return {
                ...state,
                page: action.payload
            }
        default:
            return state;    
    }
}

export const updateCurrentPage = data => {
    return async dispatch => {
        dispatch({
            type: "UPDATE_CURRENTPAGE",
            payload: data
        });
    }
}

export default currentPageReducer;