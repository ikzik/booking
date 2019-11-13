const carsReducer = ( state = {}, action ) => {
    switch(action.type) {
        case "UPDATE_CARS":
            return {
                ...state,
                cars: action.payload
            }
        default: 
            return state;    
    }
}

export const updateCars = data => {
    return async dispatch => {
        dispatch({
            type: "UPDATE_CARS",
            payload: data
        });
    }
}

export default carsReducer;