import React, { FC} from 'react'
import { GrClose } from 'react-icons/gr'
import { IPeople } from '../types'
interface ModalProps {
	setOpen:(open:boolean) => void
	people: IPeople
}

export const Modal: FC<ModalProps> = ({ setOpen, people }) => {
	return (
		<>
			<div className='fixed top-0 left-0 right-0 bottom-0  bg-black/90 ' />

			<div className=' flex justify-between w-[500px] p-4 rounded bg-white absolute top-1/4 left-1/2 -translate-x-1/2'>
				<div>
					<p className='mb-2 text-1.5xl'>
						<strong>Name:</strong> {people.name}
					</p>
					<p className='mb-2 text-1.5xl'>
						<strong>Height:</strong> {people.height}
					</p>
					<p className='mb-2 text-1.5xl'>
						<strong>Mass:</strong> {people.mass}
					</p>
					<p className='mb-2 text-1.5xl'>
						<strong>Hair color:</strong> {people.hair_color}
					</p>
					<p className='mb-2 text-1.5xl'>
						<strong>Skin color:</strong> {people.skin_color}
					</p>
					<p className='mb-2 text-1.5xl'>
						<strong>Eye color:</strong> {people.eye_color}
					</p>
					<p className='mb-2 text-1.5xl'>
						<strong>Birth year:</strong> {people.birth_year}
					</p>
					<p className='mb-2 text-1.5xl'>
						<strong>Gender:</strong> {people.gender}
					</p>
				</div>
				<div>
					<GrClose className=' cursor-pointer' onClick={() => setOpen(false)} />
				</div>
			</div>
		</>
	)
}
