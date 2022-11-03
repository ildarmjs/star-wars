import { IResponse } from './../types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IPeople } from '../types'

export const peopleApi = createApi({
	reducerPath: 'peopleApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api' }),
	endpoints: build => ({
		fetchAllPeople: build.query<IPeople[], string | number>({
			query: (page:any = 1) => ({
				url: `/people?page=${page}`,
			}),
			transformResponse: (response: IResponse): any => response.results
		}),

	}),
})

