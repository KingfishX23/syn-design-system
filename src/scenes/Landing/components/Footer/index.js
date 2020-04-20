import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { FaLine } from 'react-icons/fa'
import { CerdasGroupLogo } from '../../_links'
import styled from 'styled-components'

const Container = styled.div`
    padding: 2vh 3vh;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #f8f8f8;
`

const Logo = styled.img`
    height: 45px;
    margin: 0vh 0 0 0;
`

const CopyrightText = styled.h4`
    position: absolute;
    right: 3vh;
    //margin: 1vh 0 0 .5vh;
    color: #555
`

const LandingFooter = () => {
    return (
        <Container>
            <Logo src={CerdasGroupLogo} alt="" />
            <CopyrightText className="lato-n">2020. All rights reserved</CopyrightText>
        </Container>
    );
};

export default LandingFooter

/*

            <SocMedContainer>
                <SocMedItemContainer>
                    <SocMedIconIG/>
                </SocMedItemContainer>
                <SocMedItemContainer>
                    <SocMedIconLINE/>
                </SocMedItemContainer>
            </SocMedContainer>

*/

