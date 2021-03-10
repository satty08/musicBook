export const initialState = {
    user: null,
    book: null
}

export const actionTypes ={
    SET_USER: 'SET_USER',
    SET_BOOK: 'SET_BOOK'
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_BOOK' :{
            return{
                ...state,
                book: action.book
            }
        }
        default:
            return state
    }
}

export default reducer