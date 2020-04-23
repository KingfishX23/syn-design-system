import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
	min-height: ${(props) => props.minHeight};
	padding: 6vh 5% 14vh 5%;
	background: ${(props) => props.background};
	background-size: cover;
	background-position: center;
	color: ${(props) => props.color};
	display: flex;
	flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
	align-items: ${(props) => !props.isMobile && "center"};
`;

class LeftJumbotron extends Component {
	state = { isMobile: false };

	componentDidMount() {
		window.addEventListener("resize", this.resize.bind(this));
		this.resize();
	}

	resize() {
		this.setState({ isMobile: window.innerWidth < window.innerHeight });
	}

	render() {
		const { children, minHeight, background, color } = this.props;
		return (
			<Container
				minHeight={minHeight}
				background={background}
				color={color}
				isMobile={this.state.isMobile}
			>
				{children}
			</Container>
		);
	}
}

export default LeftJumbotron;
