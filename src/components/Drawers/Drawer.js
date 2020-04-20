import React, { Component } from 'react';
import styled from 'styled-components'
import Drawer from '@material-ui/core/Drawer';
import withStyles from '@material-ui/styles/withStyles'
import { FiX } from 'react-icons/fi';

const DrawerHeader = styled.div`
    min-width: 350px;
    margin: 0 0 -10px 0;    
    padding: 10px;
    position: relative;
`

const Logo = styled.img`
    height: 40px;
`

const CloseIcon = styled(FiX)`
    font-size: 30px;
    position: absolute;
    right: 18px;
    top: 18px;
`

class SynDrawer extends Component {

    render() {
        const { children, anchor, logoURL, open, onClose, color, classes, withHeader } = this.props
        return (
            <Drawer
                classes={{ paper: classes.paper }}
                anchor={anchor}
                open={open}
                onClose={onClose}
                color={color}
            >
                {withHeader &&
                    <DrawerHeader>
                        <Logo src={logoURL} />
                        <CloseIcon onClick={onClose} />
                    </DrawerHeader>
                }
                {children}
            </Drawer>
        );
    }
}

const withStylesProps = styles =>
    Component =>
        props => {
            const Comp = withStyles(theme => styles({ ...props, theme }))(Component);
            return <Comp {...props} />;
        };

const styles = props => ({
    paper: {
        backgroundColor: props.background,
    }
});

export default withStylesProps(styles)(SynDrawer);