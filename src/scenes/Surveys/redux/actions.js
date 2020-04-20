export const checkUsernameThenUpdateProfile = (userAccountName, name, gender, birthday) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        const authorId = getState().firebase.auth.uid

        firestore.collection('users').where("userAccountName", "==", userAccountName).get()
            .then((querySnapshot) => {
                if (querySnapshot.empty) {
                    firestore.collection('users').doc(authorId).update({
                        userName: name,
                        userGender: gender,
                        userBirthday: birthday,
                        userAccountName: userAccountName,
                        createdAt: new Date()
                    })
                        .then(() => {
                            dispatch({ type: 'PROFILE_UPDATE_SUCCESS' })
                        })
                    // 
                } else {
                    dispatch({ type: 'PROFILE_UPDATE_ERROR' })
                }
            })
    }
}

export const resetSurveysSuccess = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'RESET_SURVEYS_SUCCESS' })
    }
}

export const resetWarning = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'RESET_WARNING' })
    }
}