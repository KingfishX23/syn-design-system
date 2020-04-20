import React, { Component } from 'react';
import styled from 'styled-components'
import { FiMenu } from 'react-icons/fi';

const Container = styled.div`
	width: 100%;
	${props => !props.isMobile && "padding: 0 3%"};
	height: 70px;
	position: sticky;
    display: flex;
    flex-direction: row;
    background: ${props => props.background ? props.background : "white"};
	color: ${props => props.color ? props.color : "#333"};
`

const LogoContainer = styled.div`
    height: 70px;
    margin: 0 15px 0 0;
    padding: 15px;
`

const Logo = styled.img`
    height: 40px;
`

const MenuContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${props => props.isMobile ? "flex-end" : 'flex-start'}
`

const IconContainer = styled.div`
    height: 100%;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
`

class SynLandingHeader extends Component {

	state = { isMobile: false }

	componentDidMount() {
		window.addEventListener("resize", this.resize.bind(this));
		this.resize();
	}

	resize() {
		this.setState({ isMobile: window.innerWidth < window.innerHeight });
	}

	MobileMenu = () => {
		const { onMenuClick } = this.props
		return (
			<IconContainer>
				<FiMenu onClick={onMenuClick} />
			</IconContainer>
		)
	}

	render() {
		const { children, background, color, logoURL } = this.props
		const { isMobile } = this.state

		return (
			<Container background={background} color={color} isMobile={isMobile}>
				<LogoContainer>
					<Logo src={logoURL}/>
				</LogoContainer>
				<MenuContainer isMobile={isMobile}>
					{isMobile && this.MobileMenu()}
					{children}
				</MenuContainer>
			</Container>
		);
	}
}

export default SynLandingHeader;