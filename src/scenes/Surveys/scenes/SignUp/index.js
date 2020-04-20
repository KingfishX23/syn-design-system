import React, { Component, Fragment } from 'react';
// NPM PACKAGES
import { Redirect } from 'react-router-dom'
import { FiSmile } from 'react-icons/fi';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress'
import withStyles from '@material-ui/styles/withStyles'
// COMPONENTS
import SurveysInput from '../../components/Input'
import SurveysPicker from '../../components/Picker'
import SurveysDatePicker from '../../components/DatePicker'
// REDUX
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
    resetSurveysSuccess,
    checkUsernameThenUpdateProfile,
    resetWarning
} from '../../redux/actions'
// STYLES
import './styles.scss'

const SurveysSignupArtwork = "https://firebasestorage.googleapis.com/v0/b/udaplandev.appspot.com/o/Artworks%2FSurveys%2FSurveySignupArtwork.webp?alt=media&token=13db5d71-a0aa-4b93-b74f-eaf1694de091"

const CustomLinearProgress = withStyles({
    root: {
        height: 10,
        backgroundColor: "#eee"
    },
    bar: {
        borderRadius: 20,
        backgroundColor: '#3377FF',
    },
})(LinearProgress);

class SurveysSignUp extends Component {
    state = {
        isLoading: false,
        stepsValue: .1,
        surveyIntro: true,
        survey1: false,
        survey2: false,
        survey3: false,
        name: "",
        userAccountName: "",
        gender: "-",
        birthday: ""
    }

    componentDidMount() {
        this.props.resetSurveysSuccess()
    }

    componentDidUpdate() {
        if (this.state.isLoading && this.props.usernameExists) {
            this.setState({ isLoading: false })
        }
    }

    handleInputChange = (event) => {
        if (event.target.id === "userAccountName") {
            this.setState({ [event.target.id]: event.target.value.toLowerCase() })
        } else this.setState({ [event.target.id]: event.target.value })
    }

    handlePickerChange = (event, stateName) => {
        this.setState({ [stateName]: event.target.value })
    }

    handleDateChange = (date, stateName) => {
        this.setState({ [stateName]: date })
    }

    handleFormSubmit = async (e) => {
        const { userAccountName, name, gender, birthday } = this.state

        e.preventDefault()
        this.props.resetWarning()
        this.setState({ isLoading: true })
        this.props.checkUsernameThenUpdateProfile(
            userAccountName,
            name,
            gender,
            birthday
        );
    }

    handleClick = () => {
        const { survey1, survey2, survey3 } = this.state

        if (!survey1) this.setState({ survey1: true, stepsValue: 1, surveyIntro: false })
        if (!survey2 && survey1) this.setState({ survey2: true, stepsValue: 2 })
        if (!survey3 && survey2 && survey1) this.setState({ survey3: true, stepsValue: 3 })
    }

    renderFinishButton = () => {
        const { survey3, isLoading } = this.state

        const conditionals = this.state.userAccountName !== ""
        return (
            survey3 &&
            <button
                className="ud-surveys--signup__finish-button button"
                onClick={this.handleFormSubmit}
                disabled={conditionals ? false : true}
                style={{
                    background: conditionals ? null : "#ccc",
                    color: conditionals ? null : "#999"
                }}
            >
                {!isLoading ? "Finish" : <CircularProgress size="30px" />}
            </button>
        )
    }

    renderContinueButton = () => {
        const conditionals = this.state.surveyIntro || (!this.state.survey1) || (this.state.name !== "" && this.state.survey1 && !this.state.survey2) || (this.state.gender !== "-" && this.state.birthday !== "")
        return (
            !this.state.survey3 &&
            <button
                className="ud-surveys--signup__continue-button button"
                onClick={this.handleClick}
                disabled={conditionals ? false : true}
                style={{
                    background: conditionals ? null : "#ccc",
                    color: conditionals ? null : "#999"
                }}
            >
                Continue
                </button>
        )
    }

    render() {
        const { surveySuccess, usernameExists } = this.props
        const {
            stepsValue,
            surveyIntro,
            survey1,
            survey2,
            survey3,
            name,
            gender,
            birthday,
            userAccountName
        } = this.state

        const genderOptions = ["Male", "Female", "Other"]

        if (surveySuccess) return <Redirect to="/planners" />

        return (
            <div className="ud-surveys--signup__container">
                <div className="ud-surveys--signup__linear-progress-container font-n-b-o">
                    <CustomLinearProgress
                        className="ud-surveys--signup__linear-progress-itself"
                        value={(stepsValue) * (100 / 3)}
                        variant="determinate"
                    />
                </div>
                {surveyIntro
                    ? <div className="ud-surveys--signup__hello-container">
                        <p className="ud-surveys--signup__hello-text">
                            {`We want to
                            know you better`}
                        </p>
                        <p className="ud-surveys--signup__hello-description font-n-b-o">
                            Lets set up your profile!
                        </p>
                        <img src={SurveysSignupArtwork} className="ud-surveys--signup__intro-image" />
                    </div>

                    : <div className="ud-surveys--signup__form-container" >
                        {survey1 &&
                            <SurveysInput
                                id="name"
                                type="text"
                                label="Full Name"
                                placeholder="Cecep Mulyadi"
                                value={name}
                                inputAction={this.handleInputChange}
                            />
                        }
                        {survey2 &&
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <SurveysPicker
                                    id="gender"
                                    type="text"
                                    label="Gender"
                                    placeholder="-"
                                    inputAction={(event) => this.handlePickerChange(event, 'gender')}
                                    flex={1}
                                    options={genderOptions}
                                    value={gender}
                                />
                                <SurveysDatePicker
                                    id="birthday"
                                    type="text"
                                    label="Birthday"
                                    selected={birthday}
                                    inputAction={(date) => this.handleDateChange(date, "birthday")}
                                    flex={1.8}
                                    position="right"
                                    value={birthday}
                                />
                            </div>
                        }
                        {survey3 &&
                            <SurveysInput
                                id="userAccountName"
                                type="text"
                                label="Username"
                                placeholder="Bang_toyib"
                                inputAction={this.handleInputChange}
                                value={userAccountName}
                                containerStyle={{ margin: "1vh 0 0 0" }}
                                enableFrontIcon={true}
                                frontIcon={"@"}
                            />
                        }
                    </div>
                }
                {usernameExists &&
                    <p className="ud-surveys--signup__warning-container font-b-s-a">
                        Your username is already taken <FiSmile />
                    </p>
                }
                <div className="ud-surveys--signup__buttons-container">
                    {this.renderFinishButton()}
                    {this.renderContinueButton()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        usernameExists: state.surveys.usernameExists,
        surveySuccess: state.surveys.surveySuccess,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetSurveysSuccess: () => dispatch(resetSurveysSuccess()),
        resetWarning: () => dispatch(resetWarning()),
        checkUsernameThenUpdateProfile: (userAccountName, name, gender, birthday) => dispatch(checkUsernameThenUpdateProfile(userAccountName, name, gender, birthday))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveysSignUp);