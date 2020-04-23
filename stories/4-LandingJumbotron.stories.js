import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, object } from "@storybook/addon-knobs";
import { JumbotronContainer, JumbotronMain } from 'components/Landing/Jumbotron';
import Button from 'components/Button'

export default {
    title: 'Landing Jumbotron',
    decorators: [withKnobs]
};

export const Center_Jumbotron = () => (
    <CenterJumbotron
        minHeight={text("Height", "550px")}
        background={text("Background", "linear-gradient(#005FCC, #002565)")}
        color={text("Color", "#fff")}
        headline={object("Headline", {
            text: "World most famous cookies delivered to your doors",
            weight: '900',
            family: 'Lato',
            size: '2.25em'
        })}
        subheading={object("SubHeading", {
            text: "Customize cookie types or subscribe, then we deliver cookies right to your door",
            weight: '400',
            family: 'Lato',
            size: '1.25em'
        })}
        enablePrimaryCTA
        primaryCTA={
            <Button
                background="white"
                color="#333"
                style={{margin: "10px 0 0 0"}}
            >
                Check Our Shop
            </Button>
        }
        enableSecondaryCTA
        onCTAClick={action('Clicked')}
    />
);

export const Left_Jumbotron = () => (
    <LeftJumbotron
        minHeight={text("Height", "80vh")}
        background={text("Background", /*"linear-gradient(#005FCC, #002565)"*/ "url(https://images.pexels.com/photos/3095041/pexels-photo-3095041.jpeg?cs=srgb&dl=roti-makanan-kue-camilan-3095041.jpg&fm=jpg)")}
        color={text("Color", "#fff")}
        headline={object("Headline", {
            text: "World most famous cookies delivered to your doors",
            weight: '900',
            family: 'Lato',
            size: '2.25em'
        })}
        subheading={object("SubHeading", {
            text: "Customize cookie types, then we deliver cookies right to your door",
            weight: '400',
            family: 'Lato',
            size: '1.25em'
        })}
        primaryCTA={
            <Button
                background="white"
                color="#333"
                //width="100%"
                style={{margin: "30px 0 0 0"}}
            >
                Check Our Shop
            </Button>
        }
    >
    </LeftJumbotron>
);
