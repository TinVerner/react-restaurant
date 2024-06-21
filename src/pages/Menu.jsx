import React from 'react'
import './Menu.css'
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap'
import BreakfastImg from '../utils/img/breakfast.jpg'
import LunchImg from '../utils/img/lunch.jpg'
import DinnerImg from '../utils/img/dinner.jpg'
import DessertImg from '../utils/img/dessert.jpg'

const breakfast = [
	{
		id: 1,
		name: 'English Breakfast',
		desc: 'smoked bacon, sausage, tomato, mushrooms, black pudding, baked beans, eggs',
		price: '20 BYN',
	},
	{
		id: 2,
		name: 'Avocado Toast',
		desc: 'avocado, poached egg, onion, tomatoes, bread',
		price: '10 BYN',
	},
	{
		id: 3,
		name: 'Burrito',
		desc: 'tortilla, egg, cheese, potatoes, pork meat',
		price: '15 BYN',
	},
]

function Menu() {
	return (
		<div className='menu-page'>
			<header className='mt-5'>
				<div className='container h-100 d-flex align-items-center justify-content-center'>
					<h1 className='text-light'>Меню</h1>
				</div>
			</header>

			<div className='breakfast my-5'>
				<div className='container'>
					<h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>
						Breakfast
					</h2>
					<div className='row flex-column-reverse flex-lg-row'>
						<div className='col-lg-6 d-flex justify-content-center'>
							<img
								src={BreakfastImg}
								className='img-fluid w-75 mt-4 mt-lg-0'
								alt=''
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Menu
