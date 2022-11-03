import React, { useState } from 'react'
import { peopleApi } from '../services/PeopleService'
import { PeopleName } from './PeopleName'

export const People = () => {
	const [page, setPage] = useState<number>(1)
	const { data, isLoading, error } = peopleApi.useFetchAllPeopleQuery(page)

	return (
		<div>
			<h1 className='text-center text-4xl font-bold mb-4'>Star wars</h1>
			<div className='mb-3 text-center'>
				<button
					className='bg-red-400 px-4 py-2 rounded mx-4 active:bg-red-700'
					onClick={() => setPage(prev => prev - 1)}
				>
					prev
				</button>
				<button
					className='bg-green-400 px-4 py-2 rounded active:bg-green-700'
					onClick={() => setPage(prev => prev + 1)}
				>
					Next
				</button>
			</div>
			{isLoading && (
				<div className='translate-x-[37%] translate-y-1/4 '>
					<img
						className='w-1/4 '
						src='https://anatomised.com/wp-content/uploads/2016/05/spinner-test4.gif'
					/>
				</div>
			)}
			{error && (
				<div>
					<img src='https://thumbs.gfycat.com/CelebratedGregariousFalcon-max-1mb.gif' />
				</div>
			)}
			<ul>
				{data?.map(people => (
					<PeopleName key={people.url} people={people} />
				))}
			</ul>
		</div>
	)
}
