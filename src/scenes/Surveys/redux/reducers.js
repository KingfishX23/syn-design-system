const initState = {
    surveySuccess: false, 
    usernameExists: false
}

const surveysReducer = (state = initState, action) => {
    switch (action.type){
        case 'PROFILE_UPDATE_SUCCESS':
           return {
            ...state,
               surveySuccess: true,
               
           };
        case 'PROFILE_UPDATE_ERROR':
            return {
                ...state,
                surveySuccess: false,
                usernameExists: true,
            }
        case 'RESET_SURVEYS_SUCCESS':
            return {
                ...state,
                surveySuccess: false
            }
        case 'RESET_WARNING':
            return {
                ...state,
                usernameExists: false,
            }
        default:
            return state 
    }
}

export default surveysReducer