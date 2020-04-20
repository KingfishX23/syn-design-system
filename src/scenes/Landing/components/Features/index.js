import React from 'react';
import styled from 'styled-components'
import { FiChevronDown } from 'react-icons/fi'
import { FeaturesArt1 } from '../../_links';

const Container = styled.div`
    min-height: 400px;
    padding: 5vh 6vh;
    //position: relative;
    //background: linear-gradient(#D85F46, #A52A2A);
    display: flex;
    flex-direction: ${props => props.isMobile ? "column" : "row"};
    //overflow-y: hidden;
`

const PrefaceText = styled.h5`
    margin: 0vh 0vh 1vh 0vh;
    white-space: pre-line;
    letter-spacing: .75px;
    line-height: 28px;
    color: #333;
`

const TextContainer = styled.div`
    margin: 0 ${props => props.isMobile ? 0 : "7vh"} 0 0;
`

const TitleText = styled.h1`
    margin: 3vh 0 0 0;
    //font-size: 40px;
    //max-width: 550px;
    letter-spacing: -1px;
    //line-height: 45px;
    color: #333;
    white-space: pre-line;
`

const SubtitleText = styled.h3`
    margin: 2vh 0vh 1vh 0vh;
    //max-width: 35vw;
    //white-space: pre-line;
    line-height: 28px;
    color: #333;
`

const ImageContainer = styled.div`
    margin: ${props => props.isMobile ? "3vh" : 0} 0 0 0vh;
`

const Image = styled.img`
    margin: 0 0 0 0;
    //height: 30vh;
    //min-width: 30vw
    max-width: 100%;
    position: relative;
`

const LandingFeatures = ({ isMobile }) => {
    return (
        <Container isMobile={isMobile}>
            <TextContainer isMobile={isMobile}> 
                <TitleText className="lato-sb">
                    Less worry for parents
                    about their children's
                    safety going to school
                </TitleText>
                <SubtitleText className="lato-n">
                    Cerdas trans provide transportation services for students in
                    rural areas that are cheaper, quicker, and safer.
                </SubtitleText>
            </TextContainer>
            <ImageContainer isMobile={isMobile}>
                <Image src={FeaturesArt1}/>
            </ImageContainer>
        </Container>
    );
};

export default LandingFeatures;

/*
        <LogoImage src={CerdasTransLogo} alt=""/>
            <SubtitleText className="lato-n">
                {`All-in-one work management tool
                to centralize work and clear
                confusion in teams`}
            </SubtitleText>

            <MainImgContainer>
                <MainImg src={LandingMainArt} />
            </MainImgContainer>
*/