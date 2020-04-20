import React, { Component } from 'react';
import styled from 'styled-components'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const CustomList = styled(List)`
    && {
        min-width: 40vh;
    }
`

const CustomListItem = styled(ListItem)`
    && {
        padding-left: ${props => props.level === 1 ? "30px" : props.level === 2 ? "45px" : "15px"};
    }
`

const ListText = styled.h3`
    margin: 6px;
    font-weight: 400;
    font-family: ${props => props.font};
    white-space: nowrap;
`

const ArrowContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`


class SynMenuDrawer extends Component {

    state = {}

    handleMultipleClick = (title) => {
        this.setState({ [title]: !this.state[title] })
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
            <List
                component="div"
                disablePadding
                key={index}
            >
                <CustomListItem
                    button
                    level={level}
                    onClick={() => this.handleMultipleClick(title)}
                >
                    {logo && <ListItemIcon>{logo}</ListItemIcon>}
                    <ListText font={font}>{title}</ListText>
                    <ArrowContainer>
                        {this.state[title] ? <ExpandLess /> : <ExpandMore />}
                    </ArrowContainer>
                </CustomListItem>
                <Collapse
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

export default SynMenuDrawer;

/*

{contents && contents.map((val, i) => {
                    const { text, link, logo } = val
                    return (
                        <ListItem
                            button
                            key={text}
                            onClick={() => history.push(link)}
                        >
                            {logo && <ListItemIcon>{logo}</ListItemIcon>}
                            <h3 style={{ fontFamily: font, fontWeight: 400, margin: 5 }}>{text}</h3>
                        </ListItem>
                    )
                })}

                */