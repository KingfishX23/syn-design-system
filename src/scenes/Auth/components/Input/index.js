import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	max-width: 320px;
	margin: 0 0 1.5vh 0;
	border-radius: 1vh;
`

const Input = styled.input`
	width: 100%;
	height: 6vh;
	padding: 1.5vh;
	display: flex;
	justify-content: center;
	font-size: 1.12em;
	border: none;
	border: 1px solid #ddd;
	border-radius: .4vh;
	background: transparent;
	color: #000000e0;

	&::placeholder {
		color: #00000050
	}
`

const AuthInput = ({ id, label, inputAction }) => {
	return (
		<Container>
			<Input
				className="lato--n"
				type={id}
				id={id}
				placeholder={label}
				onChange={inputAction}
			/>
		</Container>
	);
};

export default AuthInput;