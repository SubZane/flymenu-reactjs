import React from 'react'
import { styled, css, keyframes } from '../helpers/theme'
import { menuFadeTypes } from '../helpers/types'
import NodeItem from './NodeItem'
import NodeBackLink from './NodeBackLink'

const SlideLeftOut = keyframes`
  0% {
		transform: translateX(0);
    opacity: 1;
  }
  100% {
		transform: translateX(-100%);
    opacity: 0;
  }
`

const SlideRightIn = keyframes`
	0% {
		transform: translateX(-100%);
		opacity: 0;
	}
	100% {
		transform: translateX(0px);
		opacity: 1;
	}
`

const SlideLeftIn = keyframes`
	0% {
		transform: translateX(100%);
		opacity: 0;
	}
	100% {
		transform: translateX(0px);
		opacity: 1;
	}
`

const SlideRightOut = keyframes`
	0% {
		transform: translateX(0px);
		opacity: 1;
	}
	100% {
		transform: translateX(100%);
		opacity: 0;
	}
`

type NodeTypes = {
	fade: menuFadeTypes
	visible: boolean
}

const Node = styled.ul<NodeTypes>`
	position: absolute;
	width: 100%;
	list-style: none;
	margin: 0;
	padding: 0;
	background: ${(props) => props.theme.backgroundColor};
	font-family: Arial, Helvetica, sans-serif;
	backface-visibility: hidden;
	${(props) =>
		props.fade === 'out-left' &&
		css`
			animation: ${SlideLeftOut};
		`}
	${(props) =>
		props.fade === 'in-right' &&
		css`
			animation: ${SlideRightIn};
		`}
	${(props) =>
		props.fade === 'in-left' &&
		css`
			animation: ${SlideLeftIn};
		`}
	${(props) =>
		props.fade === 'out-right' &&
		css`
			animation: ${SlideRightOut};
		`}
	${(props) =>
		props.fade !== null &&
		css`
			animation-duration: ${props.theme.transitionDuration};
			animation-timing-function: ease-in-out;
			animation-fill-mode: forwards;
		`}
	${(props) =>
		!props.visible &&
		css`
			opacity: 0;
			display: none;
		`}
`

interface NodeProps {
	visible: boolean
	fade: menuFadeTypes
	backButtonText: string
	onAnimationEnd: () => void
	backLinkClickHandler: () => void
	menuClickHandler: (id: number, title: string) => void
	backLink: boolean
	menuData: Array<any>
}

function NodeElement(props: NodeProps) {
	return (
		<Node visible={props.visible} fade={props.fade} onAnimationEnd={props.onAnimationEnd}>
			{props.backLink && (
				<NodeBackLink backButtonText={props.backButtonText} handleClick={props.backLinkClickHandler} />
			)}
			{props.menuData.map((data) => (
				<NodeItem
					key={data.id}
					id={data.id}
					hasChildren={data.hasOwnProperty('subnodes') ? true : false}
					url={data.hasOwnProperty('subnodes') ? '#' : data.url}
					title={data.Title}
					handleClick={props.menuClickHandler}
				/>
			))}
		</Node>
	)
}

export default NodeElement
