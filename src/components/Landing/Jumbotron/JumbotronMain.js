import React from "react";
import styled from "styled-components";

const HeadingsContainer = styled.div`
	width: 100%;
	max-width: ${(props) => props.maxWidth}px;
	display: flex;
	flex-direction: column;
	align-items: ${(props) => props.align};
	text-align: ${(props) => props.align};
`;

const Preface = styled.h4`
	margin: 5px 0;
	font: 700 1em 'Lato';
`

const Headline = styled.h1`
	margin: 8px 0;
	font: 900 2.25em 'Lato';
	line-height: 1.2 !important;
	letter-spacing: -.75px;
`;

const SubHeading = styled.h4`
	margin: 8px 0;
	max-width: ${(props) => props.maxWidth - 100}px;
	line-height: 1.5 !important;
	font: 400 1.2em 'Lato';
`;

const JumbotronMain = ({ children, maxWidth, align, preface, headline, subheading }) => {
	return (
		<HeadingsContainer align={align} maxWidth={maxWidth}>
			<Preface>{preface}</Preface>
			<Headline>{headline}</Headline>
			<SubHeading maxWidth={maxWidth}>{subheading}</SubHeading>
			{children}
		</HeadingsContainer>
	);
};

export default JumbotronMain;
