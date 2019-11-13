const initialState = {
    companies : JSON.parse(localStorage.getItem('companies')) || []
}

const companiesReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case "UPDATE_COMPANIES": 
            return {
                ...state,
                companies: action.payload
            }
        default:
            return state;    
    }
}

export const updateCompanies = data => {
    return async dispatch => {
        dispatch({
            type: "UPDATE_COMPANIES",
            payload: data
        });
    }
}

export default companiesReducer;