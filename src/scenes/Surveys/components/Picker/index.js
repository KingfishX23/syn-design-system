import React, {Component} from 'react';
import Select from '@material-ui/core/Select';
import withStyles from '@material-ui/styles/withStyles'
import MenuItem from '@material-ui/core/MenuItem';
import './styles.scss'

const StyledSelect = withStyles(theme => ({
    root: {
        fontFamily: 'Lato',
        fontWeight: '400',
		fontSize: '2.51vh',
		padding: 0,
		height: "7vh",
		display: 'flex',
		alignItems: 'center'
    }
}))(props => <Select {...props} />);

class SurveysPicker extends Component {

	state={
		value: ""
	}

	render() {
		const {flex, position, options, inputAction, label} = this.props
		return (
			<div
				className="tr-surveys--picker__container"
				style={{
					flex: flex,
					margin: position === "right" ? "0 0 0 1vh" : "inherit"
				}}
			>
				<p className="tr-surveys--picker__label  font-b-s-o">{label}</p>
				<StyledSelect
					className="tr-surveys--picker__select"
					value={this.state.value}
					onChange={(event)=>{
						inputAction(event)
						this.setState({value: event.target.value })
					}}
				>
					<MenuItem value="">-</MenuItem>
					{options && options.map((currentValue, index)=>
						<MenuItem value={currentValue} key={index}>{currentValue}</MenuItem>
					)}
				</StyledSelect>
			</div>
		);
	}
}

export default SurveysPicker;