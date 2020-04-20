import React from 'react';
import styled from 'styled-components'
import { IoLogoGoogle } from 'react-icons/io'
import './styles.scss'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Button = styled.button`
    width: 100%;
    padding: 2vh 0vh;
    background-color: #fff;
    border: 1px solid #2369D2;
    color: #2369D2;
`

const Icon = styled(IoLogoGoogle)`
    margin: 0 1vh 0 0;
`

const AuthSocial = ({ onGoogleClick }) => {
    return (
        <Container>
            <Button className="defbtn lato--b" onClick={onGoogleClick}>
                <Icon />
                <h3>Google</h3>
            </Button>
        </Container>
    );
};

export default AuthSocial;