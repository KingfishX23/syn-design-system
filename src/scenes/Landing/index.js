import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
//
import LandingHeader from "./components/1-Header";
import LandingJumbotron from "./components/2-Jumbotron";
import LandingFooter from "./components/5-Footer";
//
import { connect } from "react-redux";

const Container = styled.div`
	width: 100%;
`;

class Landing extends Component {
	state = {
		isMobile: false,
	};

	componentDidMount() {
		window.addEventListener("resize", this.resize.bind(this));
		this.resize();
	}

	resize() {
		this.setState({ isMobile: window.innerWidth < window.innerHeight });
	}

	handleSignInButtonClick = () => {
		setTimeout(() => this.props.history.push("/signin"), 0);
	};

	handleSignUpButtonClick = () => {
		setTimeout(() => this.props.history.push("/signup"), 0);
	};

	render() {
		const { auth, history } = this.props;
		const { isMobile } = this.state;

		return (
			<Container> 
				<LandingHeader history={history} />
				<LandingJumbotron />
				<LandingFooter history={history} />
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
	};
};

export default connect(mapStateToProps, null)(Landing);

/*
    <LandingLists/>
    <LandingFooter />
*/
