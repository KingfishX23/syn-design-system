import React from 'react';
import styled from 'styled-components'
import ListsCard from './Cards'
import { FeaturesArt1, BenefitsArt2, BenefitsArt3 } from '../Features/_links'

const Container = styled.div`
    margin: 4vh 0 0 0;
    padding: 0vh 5vh 3vh 5vh;
    background: white;
    color: #444;
`

const Title = styled.h3`
`

const LandingLists = () => {
    return (
        <Container>
            <Title className="lato--n">Why choose us?</Title>
            <ListsCard
                img={FeaturesArt1}
                title="Easy to setup but scalable"
                description="You can also integrate our tool with chat
                apps like WhatsApp or LINE using a link
                that we will provide"
            />
            <ListsCard
                img={BenefitsArt2}
                title="Combine any features you want"
                description="Whether you are doing a workspace,
                an event, or just managing your life,
                we got the things for you"
            />
            <ListsCard
                img={BenefitsArt3}
                title="Better Prices"
                description="We don't make cheap and subpar products.
                Rather, we offer better prices with two
                pricing models"
            />
        </Container>
    );
};

export default LandingLists;