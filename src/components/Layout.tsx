import React, { FC, PropsWithChildren } from 'react'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='flex flex-col justify-center items-center h-full my-7'>
			{children}
		</div>
	)
}
