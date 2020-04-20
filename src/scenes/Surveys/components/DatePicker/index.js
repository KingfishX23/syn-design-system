import React, { Component } from 'react';
// * COMPONENTS
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
// * STYLES
import "react-datepicker/dist/react-datepicker.css";
import './styles.scss'

class SurveysDatePicker extends Component {

	state = {
		value: new Date(),
		isOpen: false,
	}

	toggleCalendar = (e) => {
		e.preventDefault()
		this.setState({ isOpen: !this.state.isOpen })
	}

	handleChange = (date) => {
		this.props.inputAction(date)
		this.setState(prevstate => ({ value: date, isOpen: !prevstate.isOpen }))
	}

	render() {
		const { flex, label, inputAction, position } = this.props

		return (
			<div
				className="tr-planners--surveys--datepicker__container"
				style={{flex, margin: position === "right" ? "0 0 0 1vh" : "inherit"}}
			>
				<p className="tr-planners--surveys--datepicker__label font-b-s-o">{label}</p>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<KeyboardDatePicker
						id="datePicker"
						format="MM/dd/yyyy"
						value={this.state.value}
						disableFuture
						openTo="year"
						onChange={(date) => {
							inputAction(date)
							this.setState({ value: date })
						}}
						InputProps={{
							style: {
								font: "400 2.18vh Lato",
								color: '#333',
								height: '7vh'
							},
						}}
					/>
				</MuiPickersUtilsProvider>
			</div>
		);
	}
}

export default SurveysDatePicker;
