import React from 'react'
import { styled, css, keyframes } from '../helpers/theme'
import { overlayFadeTypes } from '../helpers/types'

const fadein = keyframes`
	0% { opacity: 0;}
	100% {opacity: 1;}
`

const fadeout = keyframes`
	100% {opacity: 0;}
	0% { opacity: 1;}
`

type OverlayType = {
	fade: overlayFadeTypes
}

const Overlay = styled.div<OverlayType>`
	backface-visibility: hidden;
	position: fixed;
	z-index: 1000;
	top: -5000px;
	right: -5000px;
	bottom: -5000px;
	left: -5000px;
	display: none;
	background: rgba(43,46,56,.9);
  ${(props) =>
		props.fade === 'in' &&
		css`
			animation: ${fadein};
			animation-duration: ${props.theme.transitionDuration};
			animation-fill-mode: forwards;
			animation-timing-function: ease-in;
			animation-iteration-count: 1;
			display: block;
		`}
  ${(props) =>
		props.fade === 'out' &&
		css`
			animation: ${fadeout};
			animation-duration: ${props.theme.transitionDuration};
			animation-timing-function: ease-out;
			animation-fill-mode: forwards;
			animation-iteration-count: 1;
			opacity: 1;
			display: block;
		`}
	${(props) =>
		props.fade === '' &&
		css`
			display: none;
		`}
`

interface iProps {
	fade: overlayFadeTypes
	handleEvent: () => void
	onAnimationEnd: () => void
}

function OverlayContainer(props: iProps) {
	return <Overlay fade={props.fade} onClick={props.handleEvent} onAnimationEnd={props.onAnimationEnd} />
}

export default OverlayContainer
