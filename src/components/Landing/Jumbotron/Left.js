import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    min-height: ${props => props.minHeight};
    padding: 12vh 8% 20vh 8%;
    background: ${props => props.background};
    background-size: cover;
    background-position: center;
    color: ${props => props.color};
    display: flex;
    flex-direction: ${props => props.isMobile ? "column" : "row"};
    align-items: ${props => !props.isMobile && "center"}
`

const HeadingsContainer = styled.div`
    width: 100%;
    max-width: 600px;
`

const Headline = styled.h1`
    margin: 0;
    font: ${props => props.headline["weight"]} ${props => props.headline["size"]} ${props => props.headline["family"]};
`

const SubHeading = styled.h4`
    margin: 15px 0;
    line-height: 1.5 !important;
    font: ${props => props.subheading["weight"]} ${props => props.subheading["size"]} ${props => props.subheading["family"]};
`

const ChildrenContainer = styled.div`
    padding: 0 8%;
`

class LeftJumbotron extends Component {

    state = { isMobile: false }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({ isMobile: window.innerWidth < window.innerHeight });
    }

    render() {
        const { children, minHeight, background, color, headline, subheading, primaryCTA, secondaryCTA } = this.props
        return (
            <Container
                minHeight={minHeight}
                background={background}
                color={color}
                isMobile={this.state.isMobile}
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
    }
}

export default LeftJumbotron;