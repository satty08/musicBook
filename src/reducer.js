export const initialState = {
    user: {
        name: '',
        email: '',
        password: '',
        dateOfBirth: ''
    }
}

export const actionTypes ={
    SET_USER: "SET_USER"
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.types) {
        case actionTypes.SET_USER_NAME:
            return {
                ...state,
                user: action.user
            }    
        default:
            return state
    }
}

export default reducer