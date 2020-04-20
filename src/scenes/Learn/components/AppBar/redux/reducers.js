const initState = { barValue: 0 }

const profileAppBarReducer = (state = initState, action) => {
    switch(action.type){
        case 'CHANGE_PROFILE_APPBAR_VALUE':
            return {
                ...state, 
                barValue: action.payload
            }
        default: 
            return state
    }
}

export default profileAppBarReducer