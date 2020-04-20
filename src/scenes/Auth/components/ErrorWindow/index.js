import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    max-width: 320px;
    padding: 1vh;
    border: 1px solid #48C822;
    background: #F3FFEF;
    color: #33811B;
`

const AuthErrorWindow = ({ authError }) => {
    console.log(authError)
    if (authError) {
        return (
            <Container>
                <h5 className="lato-n">
                    {authError === "There is no user record corresponding to this identifier. The user may have been deleted."
                        ? `It seems there's a typo in the email or the password :)`
                        : `It seems ${authError.slice(0, -1).toLowerCase()} :)`
                    }
                </h5>
            </Container>
        )
    }
    return null
};

export default AuthErrorWindow;