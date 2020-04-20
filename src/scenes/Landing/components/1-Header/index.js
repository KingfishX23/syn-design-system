import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Header, HeaderRowMenu } from 'components/Landing/Headers';
import { Drawer, DrawerList } from 'components/Drawers'
import { CerdasGroupLogo } from './_links'

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

class LandingHeader extends Component {
    state = { isMobile: false, isDrawerOpen: false }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({ isMobile: window.innerWidth < window.innerHeight });
    }

    MobileView = () => {
        const { history } = this.props
        const { isDrawerOpen } = this.state
        return (
            <Drawer
                open={isDrawerOpen}
                anchor="right"
                background="#fff"
                color="#333"
                withHeader
                logoURL={CerdasGroupLogo}
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
        const { history } = this.props
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
                logoURL={CerdasGroupLogo}
                background="#fff"
                color="#333"
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

export default withRouter(LandingHeader);

//<SignUpButton className="defbtn">Login</SignUpButton>