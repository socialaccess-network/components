export interface MenuLink {
	to: string
	label: string
	options?: Record<string, any>
	children?: MenuLink[]
}
