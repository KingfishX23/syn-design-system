import React, { Component } from "react";
import styled from 'styled-components'
import { action } from "@storybook/addon-actions";
import { withKnobs, text, object } from "@storybook/addon-knobs";
import { JumbotronContainer, JumbotronMain } from "components/Landing/Jumbotron";
import Button from "components/Button";

export default {
	title: "Landing Jumbotron",
	decorators: [withKnobs],
};

const ButtonsContainer = styled.div`
	margin: 15px 0 0 0;
`;

export const CenterJumbotron = () => {
	return (
		<JumbotronContainer
			minHeight={"80vh"}
			background={`url("https://images.pexels.com/photos/1029615/pexels-photo-1029615.jpeg?cs=srgb&dl=arsitektur-arsitektur-modern-bagian-dalam-bangunan-1029615.jpg&fm=jpg")`}
            color={"#333"}
            align="center"
		>
			<JumbotronMain
				preface="EAT FROM HOME"
				headline="World most famous cookies delivered to your doors"
				subheading="Customize cookie types, then we deliver cookies right to your door"
				align="center"
				maxWidth={500}
			>
				<ButtonsContainer>
					<Button
						disableElevation
						background="yellow"
						color="#333"
						style={{
							font: "900 1em 'Lato'",
							padding: "15px none",
						}}
					>
						LEARN MORE
					</Button>
				</ButtonsContainer>
			</JumbotronMain>
		</JumbotronContainer>
	);
};

export const LeftJumbotron = () => {
	return (
		<JumbotronContainer
			minHeight={"80vh"}
			background={`url("https://images.pexels.com/photos/1029615/pexels-photo-1029615.jpeg?cs=srgb&dl=arsitektur-arsitektur-modern-bagian-dalam-bangunan-1029615.jpg&fm=jpg")`}
            color={"#333"}
            align="left"
		>
			<JumbotronMain
				preface="EAT FROM HOME"
				headline="World most famous cookies delivered to your doors"
				subheading="Customize cookie types, then we deliver cookies right to your door"
				align="left"
				maxWidth={400}
			>
				<ButtonsContainer>
					<Button
						disableElevation
						background="yellow"
						color="#333"
						style={{
							font: "900 1em 'Lato'",
							padding: "15px none",
						}}
					>
						LEARN MORE
					</Button>
				</ButtonsContainer>
			</JumbotronMain>
		</JumbotronContainer>
	);
};
