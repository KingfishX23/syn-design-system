import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress'
// COMPONENTS 
import AuthInput from '../../components/Input'
import AuthSocial from '../../components/Social'
import AuthErrorWindow from '../../components/ErrorWindow'
import { LogoOnly } from '../../_links'
// REDUX 
import { signIn, resetAuthError } from '../../redux/actions'
import { connect } from 'react-redux'

const Container = styled.div`
    height: 80vh;
    width: 100vw;
    padding: 4vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: center;
    //background: #fcfcfc;
`

const Logo = styled.img`
    margin: 4vh 0 0 0;
    height: 7vh;
`

const Title = styled.h4`
    margin: 0vh 0vh .5vh 0vh;
    //letter-spacing: 1px;
    color: #888;
`

const PageTitle = styled.h3`
    margin: 4vh 0 0 0;
`

const Form = styled.form`
    width: 100%;
    padding: 6vh 0vh 0vh 0vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ButtonContainer = styled.div`
    margin: 1vh 0 0 0;
    width: 100%;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SignButton = styled.button`
    width: 100%;
    padding: 1vh 0vh 1vh 0vh;
    margin: 2vh 0vh 0vh 0vh;
    background-color: #2369D2;
    color: white;

    &:active {
        background-color: #1f59b1;
    }
`

const GoToSignup = styled.h4`
    position: absolute;
    bottom : 13vh;
    margin: 5vh 0 0 0;
    color: #2369D2
`

const Disclaimer = styled.h5`
    position: absolute;
    bottom: 4vh;
    text-align: center;
    white-space: pre-line;
    color: #999;
`

const LoadingContainer = styled.div`
    margin: 3vh 0 0 0;
    display: flex;
    justify-content: center;
    color: #1f59b1
`

class AuthSignIn extends Component {
    state = {
        email: '',
        password: '',
        isLoading: false,
        useSocialLogin: false
    }

    componentDidMount() {
        this.props.resetAuthError()
    }

    componentDidUpdate() {
        //Disable loading logic
        if (this.props.authError && this.state.isLoading) this.setState({ isLoading: false })
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.setState({ isLoading: true })
        this.props.signIn(this.state)
        this.props.resetAuthError()
    }

    render() {
        const { authError, auth, isOnQuota, history } = this.props
        const { isLoading } = this.state

        if (auth.uid) return <Redirect to="/projects" />

        return (
            <Container>
                <Logo src={LogoOnly} alt="" />
                <PageTitle className="lato-n">Log In</PageTitle>
                <Form onSubmit={(e) => this.handleFormSubmit(e)}>
                    <AuthInput
                        id="email"
                        type="email"
                        label="Email"
                        inputAction={(event) => this.handleInputChange(event)}
                    />
                    <AuthInput
                        id="password"
                        type="password"
                        label="Password"
                        inputAction={(event) => this.handleInputChange(event)}
                    />
                    <AuthErrorWindow authError={authError} />
                    {!isLoading
                        ? <ButtonContainer>
                            <SignButton className="defbtn lato-b" type="submit">
                                <h4 className="lato-b">Log In</h4>
                            </SignButton>
                            <GoToSignup className="lato-b" onClick={()=>history.push('/signup')}>
                                <u>I dont have an account</u>
                            </GoToSignup>
                        </ButtonContainer>
                        : <LoadingContainer>
                            <CircularProgress color="inherit" />
                        </LoadingContainer>
                    }
                    <Disclaimer className="lato-n">
                        {`By logging in with a cerdas trans account, you agree
                        to our Terms & Conditions and Privacy Policy`}
                    </Disclaimer>
                </Form>

            </Container>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
        isConfirmed: state.auth.isConfirmed,
        isOnQuota: state.auth.isOnQuota,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (newUser) => dispatch(signIn(newUser)),
        resetAuthError: () => dispatch(resetAuthError())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthSignIn);
