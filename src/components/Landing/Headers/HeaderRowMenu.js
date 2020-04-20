import React, { Component } from 'react';
import styled from 'styled-components'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Menu } from '@material-ui/core';

const CustomList = styled(List)`
    && {
        padding: 0;
        display: flex;
        flex-direction: row;
    }
`

const CustomListItem = styled(ListItem)`
    && {
        height: ${props => props.level === 0 ? "70px" : "50px"};
        //padding-right: 40px;
        //border: 1px solid #ddd;
        background: white;
        padding-left: ${props => props.level === 2 && "30px"};
    }
`

const ListText = styled.h3`
    margin: 6px;
    font-weight: 400;
    font-family: ${props => props.font};
    white-space: nowrap;
`

const ArrowContainer = styled.div`
    //min-width: 100%;
    //position: absolute;
    //right: 10px;
    display: flex;
    justify-content: flex-end;
`

class SynHeaderRowMenu extends Component {

    state = {}

    handleMultipleClick = (e, title) => {
        this.setState({
            [title]: !this.state[title],
            [`anchorEl${title}`]: e.currentTarget
        })
    }

    Divider = () => {
        return null;
    }

    SingleItem = (title, linkTo, logo, level, index) => {
        const { font, history } = this.props
        return (
            <CustomListItem button level={level} key={index} onClick={() => history.push(linkTo)}>
                {logo && <ListItemIcon>{logo}</ListItemIcon>}
                <ListText font={font}>{title}</ListText>
            </CustomListItem>
        )
    }

    MultipleItem = (title, logo, contents, level, index) => {
        const { font } = this.props
        return (
            <List component="div" disablePadding key={index}>
                <CustomListItem button onClick={(e) => this.handleMultipleClick(e, title)} level={level}>
                    {logo && <ListItemIcon>{logo}</ListItemIcon>}
                    <ListText font={font}>{title}</ListText>
                    <ArrowContainer>
                        {this.state[title] ? <ExpandLess /> : <ExpandMore />}
                    </ArrowContainer>
                </CustomListItem>
                {level === 0
                    ? <Menu
                        anchorEl={this.state[`anchorEl${title}`]}
                        open={this.state[title] ? this.state[title] : false}
                        onClose={() => this.setState({ [title]: false })}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                            vertical: level === 0 ? "bottom" : 'top',
                            horizontal: level === 0 ? 'left' : 'right',
                        }}
                    >
                        {contents.map((val, index2) => {
                            const { level, title, logo, linkTo, contents } = val
                            return val.type === "single"
                                ? this.SingleItem(title, linkTo, logo, level, index2)
                                : val.type === "divider"
                                    ? this.Divider(index2)
                                    : this.MultipleItem(title, logo, contents, level, index2)
                        })}
                    </Menu>
                    : <Collapse
                        in={this.state[title]}
                        timeout="auto"
                        unmountOnExit
                    >
                        {contents.map((val, index2) => {
                            const { level, title, logo, linkTo, contents } = val
                            return val.type === "single"
                                ? this.SingleItem(title, linkTo, logo, level, index2)
                                : val.type === "divider"
                                    ? this.Divider(index2)
                                    : this.MultipleItem(title, logo, contents, level, index2)
                        })}
                    </Collapse>
                }
            </List>
        )
    }

    render() {
        const { contents, font } = this.props
        return (
            <CustomList font={font}>
                {contents.map((val, index) => {
                    const { level, title, logo, linkTo, contents } = val
                    return val.type === "single"
                        ? this.SingleItem(title, linkTo, logo, level, index)
                        : val.type === "divider"
                            ? this.Divider(index)
                            : this.MultipleItem(title, logo, contents, level, index)
                })}
            </CustomList>
        );
    }
}

export default SynHeaderRowMenu;