export const changeProfileAppBarValue = (newValue) => {
    return (dispatch, getState) => {
        dispatch({ type: 'CHANGE_PROFILE_APPBAR_VALUE', payload: newValue })
    }
}