const signInMethod = (resp, firestore, dispatch) => {
    const waitlistRef = firestore.collection('waitlist').doc("9eVCt7iOeET1VrQ8dMDa")
    firestore.collection('users').doc(resp.user.uid).get()
        .then((doc) => {
            const userData = doc.data()
            waitlistRef.get()
                .then((doc) => {
                    const waitlistData = doc.data()
                    const payload = userData.userNumber < waitlistData.maxQuota ? true : false
                    dispatch({ type: 'LOGIN_SUCCESS', payload })
                })
        })
}

const signUpMethod = (resp, firestore, dispatch) => {
    const batch = firestore.batch()
    let docData = undefined

    const waitlistRef = firestore.collection("waitlist").doc("9eVCt7iOeET1VrQ8dMDa");
    const usersRef = firestore.collection("users").doc(resp.user.uid);
    const workspacesRef = firestore.collection("workspaces").doc(resp.user.uid);
    const workspacePagesRef = workspacesRef.collection("pages");

    waitlistRef.get()
        .then((doc) => {
            docData = doc.data()

            workspacesRef.set({
                workspaceName: "Personal",
                pages: [],
                roles: { [resp.user.uid]: 'admin' },
                members: []
            }).then(() => {
                workspacePagesRef.add({
                    tasks: {},
                    column: {},
                    columnOrder: [],
                    pageName: "Welcome",
                    pageType: "Task",
                    pageGroup: resp.user.uid,
                    pageId: resp.user.uid,
                    pageCreatedAt: new Date()
                }).then((docRef) => {
                    batch.update(workspacesRef, {
                        pages: firestore.FieldValue.arrayUnion({
                            pageName: "Task Page",
                            pageType: "Task",
                            pagePercentage: 0,
                            pageId: docRef.id
                        })
                    })

                    batch.set(usersRef, {
                        friends: [],
                        workspaces: [{ workspaceName: "Personal Workspace", workspaceMember: 1, docId: resp.user.uid }],
                        userImageLink: "",
                        userImageRef: "",
                        userAccountName: "",
                        userNumber: docData.currentUsers + 1,
                        userId: resp.user.uid,
                        userName: "",
                        userGender: "",
                        userBirthday: "",
                        createdAt: new Date(),
                    })

                    batch.update(waitlistRef, {
                        currentUsers: firestore.FieldValue.increment(1)
                    })
                }).then(() => {
                    batch.commit()
                        .then(() => {
                            const payload = docData.currentUsers + 1 < docData.maxQuota ? true : false
                            dispatch({ type: 'SIGNUP_SUCCESS', payload })
                        })
                })
            })
        })
}

export const signIn = (credentials) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firebase = getFirebase();
        const firestore = getFirestore()

        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            .then((resp) => dispatch({ type: 'LOGIN_SUCCESS' }))
            .catch((err) => dispatch({ type: 'LOGIN_ERROR', err }))
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then((resp) => dispatch({ type: 'SIGNUP_SUCCESS' }))
            .catch(err => dispatch({ type: 'SIGNUP_ERROR', err }))
    }
}

export const resetAuthError = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'RESET_AUTHERROR' })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut()
            .then(() => dispatch({ type: 'SIGNOUT_SUCCESS' }))
    }
}