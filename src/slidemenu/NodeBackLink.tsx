import React from 'react'
import { styled } from '../helpers/theme'

const BackLink = styled.a`
	display: block;
	color: ${(props) => props.theme.slidemenu.textColor};
	text-decoration: none;
	font-size: 14px;
	padding: 15px 20px;
	line-height: 20px;
	outline: none;
	position: relative;
	cursor: pointer;
	padding-left: 35px;
	background: rgba(220, 221, 215, 1);
	&:after {
		position: absolute;
		width: 12px;
		height: 12px;
		top: 18px;
		content: ' ';
		left: 15px;
		right: 15px;
		display: inline-block;
		background-image: url('img/arrow-right.svg');
		background-repeat: no-repeat;
		background-position: fixed;
		color: rgba(104, 104, 104, 0.5);
		transform: rotate(180deg);
	}
	&:hover {
		background: rgba(220, 221, 215, 0.5);
		color: ${(props) => props.theme.slidemenu.textColor};
	}
	&:not([href]):hover {
		background: rgba(220, 221, 215, 0.5);
		color: ${(props) => props.theme.slidemenu.textColor};
	}
	&:not([href]) {
		color: ${(props) => props.theme.slidemenu.textColor};
	}
`

const Node = styled.li``

interface IProps {
	backButtonText: string
	handleClick: () => void
}

function NodeBackLink(props: IProps) {
	return (
		<Node>
			<BackLink onClick={props.handleClick}>{props.backButtonText}</BackLink>
		</Node>
	)
}

export default NodeBackLink
