import React from 'react';
import styled from 'styled-components'
import Color from 'color'
import Button from '@material-ui/core/Button';
import StylesProvider from '@material-ui/styles/StylesProvider';

const StyledBtn = styled(Button)`
    width: ${props => props.fullWidth ? '100%' : "undefined"};
    padding: 12px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: none;
    font: 400 1em 'Roboto';
    letter-spacing: 0;
    border: 0;
    border-radius: .35vh;

    background: ${props => props.background};
    color: ${props => props.color};

    &:hover {
        background: ${props => Color(props.background).darken(0.15)};
    }
`

const SynButton = ({ children, background, color, disableElevation, fullWidth, disabled, onClick, style }) => {
    return (
        <StylesProvider injectFirst>
            <StyledBtn
                variant="contained"
                background={background}
                color={color}
                disableElevation={disableElevation}
                fullWidth={fullWidth}
                disabled={disabled}
                onClick={onClick}
                style={style}
            >
                {children}
            </StyledBtn>
        </StylesProvider>
    );
};

export default SynButton;