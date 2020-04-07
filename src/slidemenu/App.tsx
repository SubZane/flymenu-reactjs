import React, { useState, useEffect } from 'react'
import { styled } from '../helpers/theme'
import { findNode } from '../helpers/helpers'
import { treemenuObjectType, parentKeysType, menuFadeTypes, stateTypes } from '../helpers/types'
import Node from './Node'
import Breadcrumbs from './Breadcrumbs'

const MenuWrapper = styled.div`
	background: ${(props) => props.theme.backgroundColor};
	position: relative;
`

interface SlidemenuProps {
	menuDataSource: Array<any>
	backButtonText: string
}

function Slidemenu(props: SlidemenuProps) {
	const [isEvenNodeVisible, setEvenNodeVisible] = useState<boolean>(true)
	const [isOddNodeVisible, setOddNodeVisible] = useState<boolean>(false)
	const [showEvenBackLink, setShowEvenBackLink] = useState<boolean>(false)
	const [showOddBackLink, setShowOddBackLink] = useState<boolean>(false)

	const [menuData, loadMenuData] = useState<Array<treemenuObjectType>>([])
	const [evenMenuData, setEvenMenuData] = useState<Array<treemenuObjectType | any>>([])
	const [oddMenuData, setOddMenuData] = useState<Array<treemenuObjectType | any>>([])

	const [nodeLevel, setNodeLevel] = useState<number>(0)
	const [parentKeys, setParentKeys] = useState<Array<parentKeysType>>([])
	const [condition, setCondition] = useState<stateTypes>('')

	const [oddFade, setOddFade] = useState<menuFadeTypes>('')
	const [evenFade, setEvenFade] = useState<menuFadeTypes>('')
	const [breadcrumbs, setBreadcrumbs] = useState<Array<parentKeysType>>([])

	useEffect(() => {
		loadMenuData(props.menuDataSource)
		setEvenMenuData(props.menuDataSource)
	}, [props.menuDataSource])

	function resetFadeStates() {
		setOddFade('')
		setEvenFade('')
	}

	useEffect(() => {
		if (condition === 'open') {
			if (nodeLevel % 2 === 0) {
				setEvenNodeVisible(true)
				setEvenFade('in-left')

				setOddFade('out-left')
			} else {
				setOddNodeVisible(true)
				setOddFade('in-left')

				setEvenFade('out-left')
			}
		} else if (condition === 'close') {
			if (nodeLevel % 2 === 0) {
				setEvenNodeVisible(true)
				setEvenFade('in-right')

				setOddFade('out-right')
			} else {
				setOddNodeVisible(true)
				setOddFade('in-right')

				setEvenFade('out-right')
			}
		}
	}, [nodeLevel, condition])

	useEffect(() => {
		if (nodeLevel > 0) {
			if (nodeLevel % 2 === 0) {
				setShowEvenBackLink(true)
			} else {
				setShowOddBackLink(true)
			}
		}
	}, [nodeLevel])

	function OpenNode(id: number, title: string) {
		setCondition('open')
		setNodeLevel(nodeLevel + 1)
		const parent = {
			id: id,
			Title: title,
			nodeLevel: nodeLevel + 1,
		}
		setParentKeys((prevArray) => [...prevArray, parent])

		if (nodeLevel % 2 === 0) {
			const obj = evenMenuData.filter((p) => p.id === id)
			if (obj.length > 0) {
				setOddMenuData(obj.shift().subnodes)
			}
		} else {
			const obj = oddMenuData.filter((p) => p.id === id)
			if (obj.length > 0) {
				setEvenMenuData(obj.shift().subnodes)
			}
		}
	}

	useEffect(() => {
		setBreadcrumbs(parentKeys)
	}, [parentKeys])

	function CloseNode() {
		setCondition('close')
		setNodeLevel(nodeLevel - 1)

		setParentKeys((prevKeys) => prevKeys.splice(0, prevKeys.length - 1))

		if (parentKeys.length > 1) {
			const parentNode: parentKeysType = parentKeys[parentKeys.length - 2]
			const obj: Array<any> | null = findNode(menuData, parentNode.id)
			if (obj !== null) {
				const menuitems: Array<any> = obj[0].subnodes
				if (nodeLevel % 2 === 0) {
					setOddMenuData(menuitems)
				} else {
					setEvenMenuData(menuitems)
				}
			}
		} else {
			if (nodeLevel % 2 === 0) {
				setOddMenuData(menuData)
			} else {
				setEvenMenuData(menuData)
			}
		}
	}

	function onNodeAnimationEnded() {
		resetFadeStates()

		if (nodeLevel % 2 === 0) {
			setOddNodeVisible(false)
			setShowOddBackLink(false)
		} else {
			setEvenNodeVisible(false)
			setShowEvenBackLink(false)
		}
	}

	return (
		<React.Fragment>
			<MenuWrapper>
				<Breadcrumbs breadcrumbs={breadcrumbs} />

				<Node
					visible={isEvenNodeVisible}
					fade={evenFade}
					onAnimationEnd={onNodeAnimationEnded}
					menuData={evenMenuData}
					menuClickHandler={OpenNode}
					backLink={showEvenBackLink}
					backLinkClickHandler={CloseNode}
					backButtonText={props.backButtonText}
				/>

				<Node
					visible={isOddNodeVisible}
					fade={oddFade}
					onAnimationEnd={onNodeAnimationEnded}
					menuData={oddMenuData}
					menuClickHandler={OpenNode}
					backLink={showOddBackLink}
					backLinkClickHandler={CloseNode}
					backButtonText={props.backButtonText}
				/>
			</MenuWrapper>
		</React.Fragment>
	)
}

export default Slidemenu
