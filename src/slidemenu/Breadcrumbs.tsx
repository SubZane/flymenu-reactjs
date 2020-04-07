import React from 'react'
import { styled } from '../helpers/theme'
import BreadcrumbNode from './BreadcrumbNode'

const Node = styled.ul`
	background-color: rgba(255, 255, 255, 0.5);
	padding-left: 36px;
	padding-top: 25px;
	pointer-events: none;
	display: block;
	margin-bottom: 0;
	list-style: none;
	padding-bottom: 20px;
`

interface BreadCrumbProps {
	breadcrumbs: Array<any>
}

function Breadcrumbs(props: BreadCrumbProps) {
	if (props.breadcrumbs.length > 0) {
		return (
			<Node>
				{props.breadcrumbs.map((data) => (
					<BreadcrumbNode key={data.id} id={data.id} title={data.Title} />
				))}
			</Node>
		)
	} else {
		return null
	}
}

export default Breadcrumbs
