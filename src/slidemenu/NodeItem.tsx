import React from 'react'
import { styled, css } from '../helpers/theme'

type NodeTypes = {
	hasChildren: boolean
}

const NodeLink = styled.a<NodeTypes>`
	display: block;
	color: ${(props) => props.theme.slidemenu.textColor};
	text-decoration: none;
	font-size: 14px;
	padding: 15px 20px;
	line-height: 20px;
	outline: none;
	cursor: pointer;
	position: relative;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	&:hover {
		color: ${(props) => props.theme.slidemenu.textColor};
		background: rgba(0, 0, 0, 0.1);
		text-decoration: none;
	}
	&:not([href]):hover {
		background: rgba(0, 0, 0, 0.1);
		color: ${(props) => props.theme.slidemenu.textColor};
	}
	&:not([href]) {
		color: ${(props) => props.theme.slidemenu.textColor};
	}
	${(props) =>
		props.hasChildren &&
		css`
			&:after {
				right: 15px;
				position: absolute;
				width: 12px;
				height: 12px;
				top: 18px;
				content: ' ';
				display: inline-block;
				background-image: url('img/arrow-right.svg');
				background-repeat: no-repeat;
				background-position: fixed;
		`}
`

const Node = styled.li``

interface IProps {
	hasChildren: boolean
	handleClick: (id: number, title: string) => void
	title: string
	url: string
	key: number
	id: number
}

function SlideNodeItem(props: IProps) {
	return (
		<Node>
			<NodeLink
				hasChildren={props.hasChildren}
				href={props.url}
				onClick={() => (props.hasChildren ? props.handleClick(props.id, props.title) : null)}>
				{props.title}
			</NodeLink>
		</Node>
	)
}

export default SlideNodeItem
