const initialState = {
    list: []
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PERSON":
            return {...state, list: [...state.list, action.payload]}
        default:
            return state
    }
}