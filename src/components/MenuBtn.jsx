import React from 'react'
import './MenuBtn.css'
import { Link } from 'react-router-dom'

export function MenuBtn() {
	return (
		<div>
			<Link to='/menu'>
				<button type='button' className='bb'>
					Меню
				</button>
			</Link>
		</div>
	)
}
