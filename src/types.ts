export interface IPeople {
	page: IPages
	name: string
	height: string
	mass: string
	hair_color: string
	skin_color: string
	eye_color: string
	birth_year: string
	gender: string
	url: string
}
export interface IPages {
	next: string
	previous: string
}
export interface IResponse {
	results: IPeople[]
	count: number
	next: string
	previous: string
}