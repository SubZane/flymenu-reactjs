export type treemenuObjectType = {
	id: number
	Title: string
	url: string
	subnodes?: [treemenuObjectType]
}

export type parentKeysType = {
	id: number
	Title: string
	nodeLevel: number
}
