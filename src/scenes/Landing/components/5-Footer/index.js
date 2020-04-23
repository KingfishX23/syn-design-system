import React from "react";
import styled from "styled-components";
import { FooterContainer, FooterColumn } from "components/Landing/Footer";
import { CerdasLogo, column1 } from "./_resource";

const Container = styled.div`
	padding: 2vh 3vh;
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	background: #323f4b;
	color: white;
`;

const Logo = styled.img`
	height: 45px;
	margin: 0vh 0 0 0;
`;

const CopyrightText = styled.h4`
	position: absolute;
	right: 3vh;
	//margin: 1vh 0 0 .5vh;
	color: #fff;
`;

const LandingFooter = ({ history }) => {
	return (
		<FooterContainer
			logoURL={CerdasLogo}
			background="#323F4B"
			color="#fff"
			IGLink="https://www.instagram.com"
			YoutubeLink="https://www.youtube.com"
			LineLink="https://www.line.me"
		>
			<FooterColumn history={history} contents={column1} />
			<FooterColumn history={history} contents={column1} />
			<FooterColumn history={history} contents={column1} />
		</FooterContainer>
	);
};

export default LandingFooter;
