export const initialState = {
    user: {
        name: '',
        email: '',
        password: '',
        dateOfBirth: ''
    }
}

export const actionTypes ={
    SET_USER: "SET_USER",
    USER_LOGOUT: "USER_LOGOUT"
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.types) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }    
        case actionTypes.USER_LOGOUT:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default reducer