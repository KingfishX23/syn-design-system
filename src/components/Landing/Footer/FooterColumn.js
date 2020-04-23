import React, { Component } from "react";
import styled from "styled-components";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const CustomList = styled(List)`
	&& {
        width: 20vw;
        max-width: 180px;
	}
`;

const CustomListItem = styled(ListItem)`
	&& {
		padding-left: ${(props) =>
			props.level === 1 ? "30px" : props.level === 2 ? "45px" : "15px"};
	}
`;

const ListText = styled.h3`
	margin: 2px;
	font: ${(props) => (props.superBold ? "900" : "400")} 1em 'Lato';
	white-space: nowrap;
`;

const ArrowContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

class SynFooterColumn extends Component {
	state = {};

	SingleItem = (title, linkTo, logo, level, index) => {
		const { font, history } = this.props;
		return (
			<CustomListItem
				button
				level={level}
				key={index}
				onClick={() => history.push(linkTo)}
			>
				{logo && <ListItemIcon>{logo}</ListItemIcon>}
				<ListText font={font}>{title}</ListText>
			</CustomListItem>
		);
	};

	MultipleItem = (title, logo, contents, level, index) => {
		const { font } = this.props;
		return (
			<List component="div" disablePadding key={index}>
				<CustomListItem
					level={level}
				>
					{logo && <ListItemIcon>{logo}</ListItemIcon>}
					<ListText font={font} superBold>
						{title}
					</ListText>
				</CustomListItem>
				{contents.map((val, index2) => {
					const { level, title, logo, linkTo, contents } = val;
					return this.SingleItem(title, linkTo, logo, level, index2);
				})}
			</List>
		);
	};

	render() {
		const { contents, font } = this.props;
		return (
			<CustomList font={font}>
				{contents.map((val, index) => {
					const { level, title, logo, linkTo, contents } = val;
					return val.type === "single"
						? this.SingleItem(title, linkTo, logo, level, index)
						: this.MultipleItem(title, logo, contents, level, index);
				})}
			</CustomList>
		);
	}
}

export default SynFooterColumn;
