import React from "react";
import styled from "styled-components";
import { JumbotronContainer, JumbotronMain } from "components/Landing/Jumbotron";
import Button from "components/Button";
import { LandingMainArt } from "./_links";

const ButtonsContainer = styled.div`
	margin: 15px 0 0 0;
`;

const LandingJumbotron = ({ isMobile }) => {
	console.log(isMobile);
	return (
		<JumbotronContainer
			minHeight={"80vh"}
			background={`url(${LandingMainArt})`}
			color={"#333"}
		>
			<JumbotronMain
				preface="EAT FROM HOME"
				headline="World most famous cookies delivered to your doors"
				subheading="Customize cookie types, then we deliver cookies right to your door"
				align="left"
				maxWidth="400px"
			>
				<ButtonsContainer>
					<Button
						disableElevation
						background="yellow"
						color="#333"
						fullWidth
						style={{
							font: "900 1em 'Lato'",
							padding: "15px 0",
						}}
					>
						LEARN MORE
					</Button>
					<Button
						disableElevation
						background="white"
						color="#333"
						fullWidth
						style={{
							marginTop: "1vh",
							font: "900 1em 'Lato'",
							padding: "15px 0",
						}}
					>
						CONTACT US
					</Button>
				</ButtonsContainer>
			</JumbotronMain>
		</JumbotronContainer>
	);
};

export default LandingJumbotron;

/*

                <ButtonContainer>
                    <LearnMoreButton className="defbtn">
                        <h3 className="lato-b">Learn More</h3>
                    </LearnMoreButton>
                </ButtonContainer>

                <PrefaceText className="lato-b">
                    A SOCIAL ENTERPRISE THAT ARE
                </PrefaceText>

            <SubtitleText className="lato-n">
                {`All-in-one work management tool
                to centralize work and clear
                confusion in teams`}
            </SubtitleText>

            <MainImgContainer>
                <MainImg src={LandingMainArt} />
            </MainImgContainer>
*/
