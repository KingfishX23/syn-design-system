import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Header, HeaderRowMenu } from 'components/Landing/Header';
import { Drawer, DrawerList } from 'components/Drawers'
import { CerdasGroupLogo, MenuContents } from './_resource'

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
                    contents={MenuContents}
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
                contents={MenuContents}
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