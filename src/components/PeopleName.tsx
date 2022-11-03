import React, { FC, useState } from 'react'
import { IPeople } from '../types'
import { useNavigate } from 'react-router-dom'
import { Modal } from './Modal'

interface PeopleNameProps {
	people: IPeople
}

export const PeopleName: FC<PeopleNameProps> = ({ people }) => {
	const [open, setOpen] = useState<boolean>(false)
	
	
	return (
		<div className=''>
			<li
				onClick={() => setOpen(true)}
				className='cursor-pointer w-[400px] text-center border-blue-600 border rounded p-2 mb-4 active:bg-black/50 hover:bg-blue-400 transition-all'
			>
				{people.name}
			</li>
			{open && <Modal people={people}  setOpen={setOpen} />}
		</div>
	)
}
