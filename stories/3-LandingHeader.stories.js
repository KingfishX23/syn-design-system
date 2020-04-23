import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, object } from "@storybook/addon-knobs";
import { Header, HeaderRowMenu } from 'components/Landing/Header';
import { Drawer, DrawerList } from 'components/Drawers'

export default {
    title: 'Landing Header',
    component: Header,
    decorators: [withKnobs]
};

const CerdasLogo = "https://firebasestorage.googleapis.com/v0/b/cerdasgrp.appspot.com/o/Landing%2FCerdasGroupLogo.webp?alt=media&token=d03f0e73-35ff-4911-8b5e-b6a95443bea6"

const contents = [
    { type: "single", level: 0, title: "Home", linkTo: "/", logo: null },
    {
        type: "multiple", level: 0, title: "Products", logo: null, contents: [
            {
                type: "multiple", level: 1, title: "UX Design", logo: null, contents: [
                    { type: "single", level: 2, title: "You know Ill Go Get", linkTo: "/ux/GoGet", logo: null }
                ]
            },
            {
                type: "multiple", level: 1, title: "Music producers", logo: null, contents: [
                    { type: "single", level: 2, title: "DJ rizki", linkTo: "/music/DJRizki", logo: null }
                ]
            },
        ]
    },
    { type: "divider" }
]

export const White = () => (
    <Header
        logoURL={CerdasLogo}
        background={text("Background", "#fff")}
        color={text("Color", "#333")}
        onMenuClick={action('Clicked')}
    />
);

class Filled extends Component {
    state = { isMobile: false, isDrawerOpen: false }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({ isMobile: window.innerWidth < window.innerHeight });
    }

    MobileView = () => {
        const { isDrawerOpen } = this.state
        return (
            <Drawer
                open={isDrawerOpen}
                anchor={text("Anchor", "right")}
                background={text("DrawerBackground", "#fff")}
                color={text("DrawerColor", "#333")}
                withHeader
                logoURL={CerdasLogo}
                onClose={() => this.setState({ isDrawerOpen: false })}
            >
                <DrawerList
                    contents={contents}
                    history={history}
                    font="Lato"
                />
            </Drawer>
        )
    }

    WebView = () => {
        return (
            <HeaderRowMenu
                contents={contents}
                history={history}
                font="Lato"
            />
        );
    }

    render() {
        const { isMobile } = this.state
        return (
            <Header
                logoURL={CerdasLogo}
                background={text("Background", "#fff")}
                color={text("Color", "#333")}
                onMenuClick={() => this.setState({ isDrawerOpen: true })}
            >
                {isMobile
                    ? this.MobileView()
                    : this.WebView()
                }
            </Header>
        )
    }
}

export const WithMenu = () => <Filled />
