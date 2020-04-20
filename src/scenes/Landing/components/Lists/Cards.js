import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    background: white;
    border-radius: 1vh;
    display: flex;
    flex-direction: column;
    margin: 3vh 0vh 6vh 0vh;
`

const ArtworkImg = styled.img`
    width: 60%;
    max-width: 250px;
    border: 1px solid #B8CBD9;
    box-shadow: 0 10px 30px #D7E0EB;
`

const Title = styled.h3`
    margin: 3vh 0 0 0;
`

const Subtitle = styled.h3`
    width: 90%;
    margin: 1vh 0 0 0;
    line-height: 30px;
`

const ListsCards = ({ img, title, description }) => {
    return (
        <Container>
            <ArtworkImg src={img} alt="" />
            <Title className="lato--sb">{title}</Title>
            <Subtitle className="lato--n">{description}</Subtitle>
        </Container>
    );
};

export default ListsCards;