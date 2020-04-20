import React from 'react';

import './styles.scss'

const MainInput = ({ id, placeholder, inputAction, label, containerStyle, enableFrontIcon, frontIcon }) => {
	return (
		<div className="tr-surveys--input__container" style={{ ...containerStyle }}>
			<p className="tr-surveys--input__label font-b-s-o">{label}</p>
			<div className="tr-surveys--input__input-container">
				{enableFrontIcon && <p className="tr-surveys--input__input-front-icon font-b-b-lato">{frontIcon}</p>}
				<input
					className="tr-surveys--input__input-itself font-n-b-lato"
					style={{ textTransform: id === "userAccountName" && 'lowercase' }}
					type={id}
					id={id}
					placeholder={placeholder}
					onChange={inputAction}
				/>
			</div>
		</div>
	);
};

export default MainInput;