import React, { Component } from 'react';
// * NPM PACKAGES
import ProfileAppBarHeader from './components/Header'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import withStyles from '@material-ui/styles/withStyles'
import { withRouter, Redirect } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
// * REDUX
import { changeProfileAppBarValue } from './redux/actions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
// * STYLES
import './styles.scss'
// * MISC

const defaultProfilePic = "https://firebasestorage.googleapis.com/v0/b/waqtooapp.appspot.com/o/artworks%2FDefaultProfilePic.webp?alt=media&token=395ed1e9-ff79-4feb-aafe-2be5d6cc30a2"

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        margin: "0 0 0vh 0",
        '& > div': {
            maxWidth: 40,
            height: 2,
            borderRadius: 5,
            width: '100%',
            backgroundColor: '#FFEE08',
        },
    },
    root: {
        transition: "all .3s ease",
        backgroundColor: '#0F4071',
        height: "7vh",
    },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
    root: {
        textTransform: 'none',
        color: '#fff',
        fontSize: '2.05vh',
        fontFamily: 'Lato',
        fontWeight: '700',
        height: '7vh',
        padding: "1vh 1.5vh 3vh 1.5vh",

        '&:focus': {
            color: '#FFEE08'
        },
        '&$selected': {
            color: '#FFEE08',
        },
    },
    selected: {},
}))(props => <Tab {...props} />);

class LearnAppBar extends Component {

    state = {
        addMenuOpen: false
    }

    componentDidMount() {
        const { location } = this.props;
        if (location.pathname.match("/profile/contents")) { this.props.changeProfileAppBarValue(0) }
        if (location.pathname.match("/profile/friends")) { this.props.changeProfileAppBarValue(1) }
        if (location.pathname.match("/profile/promotions")) { this.props.changeProfileAppBarValue(2) }
        if (location.pathname.match("/profile/settings")) { this.props.changeProfileAppBarValue(3) }
    }

    handleChange = (event, newValue) => {
        const { userProfile } = this.props
        this.props.changeProfileAppBarValue(newValue)
        if (newValue === 0) { this.props.history.push(`/learn/usecases/business`) }
        if (newValue === 1) { this.props.history.push(`/learn/usecases/events`) }
        if (newValue === 2) { this.props.history.push(`/learn/usecases/projects`) }

    }

    render() {
        const { location } = this.props

        const TransformedPathname = location.pathname.replace("/learn/usecases/", "")
        let bckgColor
        if(TransformedPathname === "business") {bckgColor = "#2F63BC"}
        if(TransformedPathname === "events") {bckgColor = "#2FA4BC"}
        if(TransformedPathname === "projects") {bckgColor = "#2BAA5E"}

        return (
            <div
                className="ud-learn-appbar__global-container"
                style={{
                    background: bckgColor
                }}
            >
                <div className="ud-learn-appbar__container">
                    <p className="ud-learn-appbar__subtitle font-b-m-lato">Use Cases</p>
                    <p className="ud-learn-appbar__title font-b-h-lato">
                    {`Our solutions can
                    help your event and 
                    business succeed
                    `}
                    </p>
                </div>
                <AppBar position="relative" className="ud-learn-appbar__appbar">
                    <StyledTabs
                        value={this.props.barValue}
                        variant="fullWidth"
                        onChange={this.handleChange}
                        style={{
                            background: bckgColor
                        }}
                    >
                        <StyledTab label="Business" />
                        <StyledTab label="Events" />
                        <StyledTab label="Projects" />
                    </StyledTabs>
                </AppBar>
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        barValue: state.profileAppBar.barValue,
        userProfile: state.firestore.ordered.userProfile,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeProfileAppBarValue: (newValue) => dispatch(changeProfileAppBarValue(newValue))
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(props => [
        {
            collection: "users",
            where: [["userAccountName", "==", props.location.pathname.replace("/profile/", "")]],
            storeAs: "userProfile",
        },
    ])
)(LearnAppBar);

/*

                                    <AppBar position="relative" className="ud-learn-appbar__appbar">
                                        <StyledTabs value={this.props.barValue} onChange={this.handleChange} style={{ height: "5vh" }}>
                                            <StyledTab label="Posts" />
                                            <StyledTab label="Promotions" />
                                        </StyledTabs>
                                    </AppBar>


                                    <img
                                        className="ud-learn-appbar__profile-background-image"
                                        src={userBckgImageLink ? userBckgImageLink : `"https://firebasestorage.googleapis.com/v0/b/waqtoolive.appspot.com/o/artworks%2Fpets-4415649_1920.jpg?alt=media&token=6421ae1e-f854-438a-8877-58b45b4fd0a6"`}
                                    />


                                    style={{
                                        background: userBckgImageLink ? `url(${userBckgImageLink})` : `url("https://firebasestorage.googleapis.com/v0/b/waqtoolive.appspot.com/o/artworks%2Fpets-4415649_1920.jpg?alt=media&token=6421ae1e-f854-438a-8877-58b45b4fd0a6")`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center center'
                                    }}





                                <div
                                    className="ud-learn-appbar__profile-background-image"
                                    style={{
                                        background: userBckgImageLink ? `url(${userBckgImageLink})` : `url("https://firebasestorage.googleapis.com/v0/b/waqtoolive.appspot.com/o/artworks%2Fpets-4415649_1920.jpg?alt=media&token=6421ae1e-f854-438a-8877-58b45b4fd0a6")`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center center'
                                    }}
                                />

<p className="ud-learn-appbar__profile-texts font-n-m-o" style={{ color: 'gray' }}>@{userAccountName}</p>



        <AppBar position="relative" className="ud-learn-appbar__appbar">
            <StyledTabs value={this.props.barValue} variant="fullWidth" onChange={this.handleChange} style={{ height: "5vh" }}>
                <StyledTab label="Contents" />
                <StyledTab label="Friends" />
            </StyledTabs>
        </AppBar>


        <div className="ud-learn-appbar__profile-edit-button-container">
            <button className="ud-learn-appbar__profile-edit-button" onClick={() => this.props.history.push('/profile/edit')}>
                <FiEdit className="font-b-b-o" />
                &nbsp;
                        <p className="font-b-s-o">Edit profile</p>
            </button>
            <button className="ud-learn-appbar__profile-edit-button" onClick={() => this.props.signOut()}>
                <FiLogOut className="font-b-b-o" />
                &nbsp;
                        <p className="font-b-s-o">Sign out</p>
            </button>
        </div>



        <div className="ud-learn-appbar__profile-edit-button-container">
            <button className="ud-learn-appbar__profile-edit-button">
                <FiSettings className="font-b-b-o" />
                <p className="font-b-s-o">Settings</p>
            </button>
        </div>
        <button onClick={() => this.props.signOut()} className="button" style={{ marginTop: '1vh' }}>SignOut</button>
        */