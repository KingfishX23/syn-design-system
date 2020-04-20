import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    min-height: ${props => props.minHeight};
    padding: 12vh 8% 20vh 8%;
    background: ${props => props.background};
    background-size: cover;
    color: ${props => props.color};
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HeadingsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Headline = styled.h1`
    margin: 0;
    font: ${props => props.headline["weight"]} ${props => props.headline["size"]} ${props => props.headline["family"]};
    text-align: center
`

const SubHeading = styled.h4`
    margin: 15px 0;
    line-height: 1.5 !important;
    font: ${props => props.subheading["weight"]} ${props => props.subheading["size"]} ${props => props.subheading["family"]};
    text-align: center
`

const ChildrenContainer = styled.div`
    padding: 0 8%;
`

const CenterJumbotron = ({ children, minHeight, background, color, style, headline, subheading, primaryCTA, secondaryCTA }) => {
    return (
        <Container
            minHeight={minHeight}
            background={background}
            color={color}
            style={style}
        >
            <HeadingsContainer>
                <Headline headline={headline}>{headline.text}</Headline>
                <SubHeading subheading={subheading}>{subheading.text}</SubHeading>
                {primaryCTA}
                {secondaryCTA}
            </HeadingsContainer>
            <ChildrenContainer>
                {children}
            </ChildrenContainer>
        </Container>
    );
};

export default CenterJumbotron;