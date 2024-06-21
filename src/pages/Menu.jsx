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

const lunch = [
	{
		id: 1,
		name: 'Салат',
		desc: 'smoked bacon, sausage, tomato, mushrooms, black pudding, baked beans, eggs',
		price: '20 BYN',
	},
	{
		id: 2,
		name: 'Спагетти',
		desc: 'avocado, poached egg, onion, tomatoes, bread',
		price: '10 BYN',
	},
	{
		id: 3,
		name: 'Роллы',
		desc: 'tortilla, egg, cheese, potatoes, pork meat',
		price: '15 BYN',
	},
]

const dinner = [
	{
		id: 1,
		name: 'Beef',
		desc: 'smoked bacon, sausage, tomato, mushrooms, black pudding, baked beans, eggs',
		price: '20 BYN',
	},
	{
		id: 2,
		name: 'спагетти болонезе',
		desc: 'avocado, poached egg, onion, tomatoes, bread',
		price: '10 BYN',
	},
	{
		id: 3,
		name: 'Карри',
		desc: 'tortilla, egg, cheese, potatoes, pork meat',
		price: '15 BYN',
	},
]

const dessert = [
	{
		id: 1,
		name: 'Десерт 1',
		desc: 'smoked bacon, sausage, tomato, mushrooms, black pudding, baked beans, eggs',
		price: '20 BYN',
	},
	{
		id: 2,
		name: 'Десерт 2',
		desc: 'avocado, poached egg, onion, tomatoes, bread',
		price: '10 BYN',
	},
	{
		id: 3,
		name: 'Десерт 3',
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
						<div className='col-lg-6 d-flex flex-column justify-content-around'>
							{breakfast.map(breakfast => (
								<div key={breakfast.id}>
									<Card className='border-0'>
										<CardBody>
											<CardTitle className='text-center fs-3'>
												{breakfast.name}
											</CardTitle>
											<CardText className='text-center fs-5'>
												{breakfast.desc}
											</CardText>
											<CardText className='text-center fs-3 text-success'>
												{breakfast.price}
											</CardText>
										</CardBody>
									</Card>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className='lunch py-5 bg-dark'>
				<div className='container'>
					<h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>
						Lunch
					</h2>
					<div className='row'>
						<div className='col-lg-6 d-flex flex-column justify-content-around'>
							{lunch.map(lunch => (
								<div key={lunch.id}>
									<Card className='text-light border-0 bg-dark'>
										<CardBody>
											<CardTitle className='text-center fs-3'>
												{lunch.name}
											</CardTitle>
											<CardText className='text-center fs-5'>
												{lunch.desc}
											</CardText>
											<CardText className='text-center fs-3 fw-bold text-success'>
												{lunch.price}
											</CardText>
										</CardBody>
									</Card>
								</div>
							))}
						</div>
						<div className='col-lg-6 d-flex justify-content-center'>
							<img
								src={LunchImg}
								className='img-fluid w-75 mt-4 mt-lg-0'
								alt=''
							/>
						</div>
					</div>
				</div>
			</div>

			<div className='dinner my-5'>
				<div className='container'>
					<h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>
						Dinner
					</h2>
					<div className='row flex-column-reverse flex-lg-row'>
						<div className='col-lg-6 d-flex justify-content-center'>
							<img
								src={DinnerImg}
								className='img-fluid w-75 mt-4 mt-lg-0'
								alt=''
							/>
						</div>
						<div className='col-lg-6 d-flex flex-column justify-content-around'>
							{dinner.map(dinner => (
								<div key={dinner.id}>
									<Card className='border-0'>
										<CardBody>
											<CardTitle className='text-center fs-3'>
												{dinner.name}
											</CardTitle>
											<CardText className='text-center fs-5'>
												{dinner.desc}
											</CardText>
											<CardText className='text-center fs-3 text-success'>
												{dinner.price}
											</CardText>
										</CardBody>
									</Card>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className='dessert py-5 bg-dark'>
				<div className='container'>
					<h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>
						Dessert
					</h2>
					<div className='row'>
						<div className='col-lg-6 d-flex flex-column justify-content-around'>
							{dessert.map(dessert => (
								<div key={dessert.id}>
									<Card className='text-light border-0 bg-dark'>
										<CardBody>
											<CardTitle className='text-center fs-3'>
												{dessert.name}
											</CardTitle>
											<CardText className='text-center fs-5'>
												{dessert.desc}
											</CardText>
											<CardText className='text-center fs-3 fw-bold text-success'>
												{dessert.price}
											</CardText>
										</CardBody>
									</Card>
								</div>
							))}
						</div>
						<div className='col-lg-6 d-flex justify-content-center'>
							<img
								src={DessertImg}
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
