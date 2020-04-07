import React from 'react'
import { styled, css } from '../helpers/theme'
import { animationTypes, childrenTypes } from '../helpers/types'

type ContentType = {
	visible: boolean
	animation: string
}

const Content = styled.div<ContentType>`
	color: #fff;
	background: ${(props) => props.theme.backgroundColor};
	max-width: 600px;
	overflow: hidden;
	position: absolute;
	bottom: 0px;
	top: 0;
	left: 0;
	right: 0;

	${(props) =>
		props.animation === 'flip-top' &&
		css`
			border-bottom-left-radius: ${props.theme.borderRadius};
			border-bottom-right-radius: ${props.theme.borderRadius};
			border-top-left-radius: 0;
			border-top-right-radius: 0;
			top: 0;
			right: 0;

			transform-style: preserve-3d;
			transform: translateY(-100%) rotateX(90deg);
			transform-origin: 100% 0;
			opacity: 0;
			transition-timing-function: ease-out;
			transition: all;
			transition-duration: ${props.theme.transitionDuration};
		`}

  ${(props) =>
		props.animation === 'door-left' &&
		css`
			border-bottom-left-radius: 0;
			border-bottom-right-radius: ${props.theme.borderRadius};
			border-top-left-radius: 0;
			border-top-right-radius: ${props.theme.borderRadius};

			transform-style: preserve-3d;
			transform: translateZ(100px) translateX(0%) rotateY(90deg);
			transform-origin: 0 100%;
			opacity: 0;
			transition: all;
			transition-duration: ${props.theme.transitionDuration};
		`}

	${(props) =>
		props.animation === 'door-right' &&
		css`
			border-bottom-left-radius: ${props.theme.borderRadius};
			border-bottom-right-radius: 0;
			border-top-left-radius: ${props.theme.borderRadius};
			border-top-right-radius: 0;

			transform-style: preserve-3d;
			transform: translateZ(100px) translateX(30%) rotateY(-90deg);
			transform-origin: 100% 0;
			opacity: 0;
			transition: all;
			transition-duration: ${props.theme.transitionDuration};
		`}

	${(props) =>
		props.animation === 'flip-bottom' &&
		css`
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		border-top-left-radius: ${props.theme.borderRadius};
		border-top-right-radius: $props.theme.borderRadius};
		bottom: 0;

		transform-style: preserve-3d;
		transform: translateY(100%) rotateX(90deg);
		transform-origin: 0 100%;
		opacity: 0;
		transition-timing-function: ease-out;
		transition: all;
		transition-duration: ${props.theme.transitionDuration};
	`}

	${(props) =>
		props.visible &&
		(props.animation === 'door-left' || props.animation === 'door-right') &&
		css`
			transform: translateZ(0px) translateX(0%) rotateY(0deg);
			opacity: 1;
		`}

	${(props) =>
		props.visible &&
		props.animation === 'flip-top' &&
		css`
			transform: translateY(0%) rotateX(0deg);
			opacity: 1;
		`}

	${(props) =>
		props.visible &&
		props.animation === 'flip-bottom' &&
		css`
			transform: translateY(0%) rotateX(0deg);
			opacity: 1;
		`}

`

const Inner = styled.div`
	overflow-y: auto;
	padding-left: ${(props) => props.theme.innerPadding};
	padding-right: ${(props) => props.theme.innerPadding};
	margin: 0;
	font-weight: 300;
	font-size: 1.15em;
	position: absolute;
	bottom: ${(props) => props.theme.innerPadding};
	top: ${(props) => props.theme.innerPadding};
	right: 0;
	left: 0;
`

interface iProps {
	visible: boolean
	animation: animationTypes
	children?: childrenTypes
}

function PanelContent(props: iProps) {
	return (
		<Content visible={props.visible} animation={props.animation}>
			<Inner>{props.children}</Inner>
		</Content>
	)
}

export default PanelContent
