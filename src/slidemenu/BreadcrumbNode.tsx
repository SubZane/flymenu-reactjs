import React from 'react'
import { styled, keyframes } from '../helpers/theme'

const FadeInTop = keyframes`
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

const NodeItem = styled.li`
	font-size: 14px;
	font-weight: 400;
	margin-bottom: 8px;
	white-space: nowrap;
	/*
	animation: ${FadeInTop};
	animation-duration: 0.3s;
	animation-timing-function: ease-in-out;
	backface-visibility: hidden;
	*/
	&:after {
		content: '';
		position: absolute;
		left: 12px;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: #F4F4F1;
		border: 2px solid #D2D1CB;
		transform: translateY(6px);
	}
	&:first-child {
		font-weight: 600;
		font-size: 15px;
		&:after {
			background: #EC7574;
			border: 2px solid #EC7574;
			border: none;
		}
	}
	&:not(:last-child) {
		&:before {
			content: '';
			position: absolute;
			left: 17px;
			margin-top: 10px;
			width: 2px;
			height: 35px;
			background: #D2D1CB;
		}
	}
`

const CrumbItem = styled.span`
	color: ${(props) => props.theme.slidemenu.textColor};
	display: inline-block;
`

interface BreadCrumbProps {
	key: number
	id: number
	title: string
}

function BreadcrumbNode(props: BreadCrumbProps) {
	return (
		<NodeItem key={props.id}>
			<CrumbItem key={props.id}>{props.title}</CrumbItem>
		</NodeItem>
	)
}

export default BreadcrumbNode
