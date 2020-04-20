import React from 'react';
import { LeftJumbotron } from 'components/Landing/Jumbotron'
import Button from 'components/Button'
import { LandingMainArt } from '../../_links';

const LandingJumbotron = ({ isMobile }) => {
    console.log(isMobile)
    return (
        <LeftJumbotron
            minHeight={"80vh"}
            background={"url(https://images.pexels.com/photos/3095041/pexels-photo-3095041.jpeg?cs=srgb&dl=roti-makanan-kue-camilan-3095041.jpg&fm=jpg)"}
            color={"#fff"}
            headline={{
                text: "World most famous cookies delivered to your doors",
                weight: '900',
                family: 'Lato',
                size: '2.25em'
            }}
            subheading={{
                text: "Customize cookie types, then we deliver cookies right to your door",
                weight: '400',
                family: 'Lato',
                size: '1.25em'
            }}
            primaryCTA={
                <Button
                    background="yellow"
                    color="#333"
                    style={{ margin: "30px 0 0 0", font: '700 1.2em Lato' }}
                >
                    Check Our Shop
                </Button>
            }
        />
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