import React from 'react'
import { styled, css } from '../helpers/theme'
import menubars from '../img/menubars.svg'

const PanelButton = styled.div`
	position: fixed;
	width: 50px;
	background-color: ${(props) => props.theme.button.backgroundColor || 'coral'};
	color: white;
	font-weight: bold;
	border-radius: 50px;
	height: 50px;
	border: none;
	&:focus {
		outline: 0;
	}
	z-index: 50;
	cursor: pointer;
	${(props) =>
		props.theme.button.position === 'center' &&
		css`
			bottom: 20px;
			left: 50%;
			margin-left: -25px;
		`}
	${(props) =>
		props.theme.button.position === 'left' &&
		css`
			bottom: 20px;
			left: 20px;
		`}
	${(props) =>
		props.theme.button.position === 'right' &&
		css`
			bottom: 20px;
			right: 20px;
		`}
	&:after {
		right: 14px;
		left: 13px;
		top: 14px;
		position: absolute;
		content: ' ';
		width: 24px;
		height: 24px;
		background-image: url(${menubars});
		background-repeat: no-repeat;
		background-position: fixed;
	}
`

interface iProps {
	handleEvent: () => void
}

function PanelButtonContainer(props: iProps) {
	return <PanelButton onClick={props.handleEvent}></PanelButton>
}

export default PanelButtonContainer
