import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import { People } from './components/People'


function App() {
	return (
		<div className='App'>
			<Layout>
				<People/>
			</Layout>
		</div>
	)
}

export default App
