import React from 'react'
import { styled, css } from '../helpers/theme'

const PanelButton = styled.div`
	position: fixed;
	width: 50px;
	background-color: ${(props) => props.theme.button.backgroundColor || 'coral'};
	color: white;
	font-weight: bold;
	border-radius: 50px;
	height: 50px;
	border: none;
	&:focus {outline:0;}
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
		right: 16px;
    color: ${(props) => props.theme.button.color || '#fff'};
    position: absolute;
    top: 1px;
    line-height: 50px;
    font-family: "Font Awesome 5 Free";
    font-weight: 400;
    content: "\f0c9";
    font-size: 20px;
    speak: none;
	}
`

interface iProps {
	handleEvent: () => void
}

function PanelButtonContainer(props: iProps) {
	return <PanelButton onClick={props.handleEvent}></PanelButton>
}

export default PanelButtonContainer
