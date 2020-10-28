import React, { Component } from "react";
import styled from "styled-components";
import { FaLine, FaInstagram, FaYoutube } from "react-icons/fa";

const Container = styled.div`
	padding: 3vh 3vh 2vh 3vh;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: ${(props) => props.background};
	color: ${(props) => props.color};
`;

const MaxWidthContainer = styled.div`
	width: 100%;
	max-width: 1280px;
`;

const ContentsContainer = styled.div`
	width: 100%;
	padding: 0 0 2vh 0;
	display: flex;
	flex-direction: ${props => props.isMobile ? "column" : "row"};
`;

const LogoSocMedContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const Logo = styled.img`
	height: 75px;
	margin: 0vh 3vh 2vh 0;
`;

const SocMedContainer = styled.div`
	height: 100%;
	padding: 1vh 2vh;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	font-size: 1.75em;
`;

const ChildrenContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: ${props => props.isMobile ? "flex-start" : "flex-end"};
`;

const CopyrightText = styled.h4`
	font: 400 1em "Lato";
	//position: absolute;
	//right: 3vh;
	//margin: 1vh 0 0 .5vh;
`;

const LegalContainer = styled.div`
	width: 100%;
	padding: 2vh;
	border-top: 1px solid #ffffff30;
`;

class LandingFooterContainer extends Component {

	state = { isMobile: false }

	componentDidMount() {
		window.addEventListener("resize", this.resize.bind(this));
		this.resize();
	}

	resize() {
		this.setState({ isMobile: window.innerWidth < window.innerHeight });
	}

	render() {
		const { isMobile } = this.state
		const {
			children,
			logoURL,
			background,
			color,
			IGLink,
			YoutubeLink,
			LineLink,
		} = this.props;
		return (
			<Container background={background} color={color}>
				<MaxWidthContainer>
					<ContentsContainer isMobile={isMobile}>
						<LogoSocMedContainer>
							<Logo src={logoURL} alt="" />
							<SocMedContainer>
								<FaInstagram
									style={{ margin: "0 3vh 0 0" }}
									onClick={() => {
										window.location.replace(IGLink);
									}}
								/>
								<FaYoutube
									style={{ margin: "0 3vh 0 0" }}
									onClick={() => {
										window.location.replace(YoutubeLink);
									}}
								/>
								<FaLine
									onClick={() => {
										window.location.replace(LineLink);
									}}
								/>
							</SocMedContainer>
						</LogoSocMedContainer>
						<ChildrenContainer isMobile={isMobile}>{children}</ChildrenContainer>
					</ContentsContainer>
					<LegalContainer>
						<CopyrightText>2020. All rights reserved</CopyrightText>
					</LegalContainer>
				</MaxWidthContainer>
			</Container>
		);
	}
}

export default LandingFooterContainer;
