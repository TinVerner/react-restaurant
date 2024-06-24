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
		name: 'Английский завтрак',
		desc: 'колбаски, бекон, яйца, багет, томаты, шампиньоны, фасоль',
		price: '19 BYN',
	},
	{
		id: 2,
		name: 'Шотландский завтрак с форелью',
		desc: 'салат "Айсберг", огурец, томат, авокадо, яйца, форель, багет, зелень',
		price: '23 BYN',
	},
	{
		id: 3,
		name: 'Французский завтрак с яйцом пашот',
		desc: 'круассан, яйца пашот, голландский соус, бекон, томат, твёрдый сыр, салат "Айсбрег", огурец, зелень',
		price: '19 BYN',
	},
]

const lunch = [
	{
		id: 1,
		name: 'Греческий салат',
		desc: 'салат "Айсберг", томат, огурец, перец болгарский, сыр "Фета", соус "Песто", маслины, заправка',
		price: '14 BYN',
	},
	{
		id: 2,
		name: 'Картофельный крем-суп с беконом',
		desc: 'картофель, бекон, зелень, сливочное масло, лук репчатый, сливки',
		price: '16 BYN',
	},
	{
		id: 3,
		name: 'Куриное филе с беконом и овощами',
		desc: 'куриное филе, бекон, картофельное крем-пюре, лук, шампиньоны, перец, соус "Терияки", зелень',
		price: '22 BYN',
	},
]

const dinner = [
	{
		id: 1,
		name: 'Стейк из сёмги с сыром и зеленью',
		desc: 'сёмга, салат, авокадо, сыр "Моцарелла", соус "Песто", кунжут, хлеб, зелень',
		price: '28 BYN',
	},
	{
		id: 2,
		name: 'Говяжья вырезка "Терияки" с пюре',
		desc: 'говядина п/ф, пюре, перец болгарский, стручковая фасоль, шампиньоны, соус "Терияки", зелень',
		price: '25 BYN',
	},
	{
		id: 3,
		name: 'Куриное филе "Сезам"',
		desc: 'куриное филе, перец болгарский, кунжутное масло, соус "Терияки", шампиньоны, стручковая фасоль, лимон, зелень, кунжут',
		price: '22 BYN',
	},
]

const dessert = [
	{
		id: 1,
		name: 'Панкейки с солёной карамелью',
		desc: 'панкейки, карамель, мороженое, сникерс, попкорн',
		price: '10 BYN',
	},
	{
		id: 2,
		name: 'Панкейки с шоколадом и орехами',
		desc: 'панкейки, ореховая паста, заварной крем, шоколадбный топинг',
		price: '12 BYN',
	},
	{
		id: 3,
		name: 'Панкейки с бананом и клубникой',
		desc: 'панкейки, заварной крем, банан, клубника, шоколадный топинг,мороженое',
		price: '11 BYN',
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
					<h2 className='text mb-lg-5 text-uppercase fw-bold'>Завтраки</h2>
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
											<CardText className='text fs-3'>
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
					<h2 className='text fs-1 mb-4 mb-lg-5 text-uppercase fw-bold'>
						Обеды
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
											<CardText className='text fs-3'>{lunch.price}</CardText>
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
					<h2 className='text fs-1 mb-4 mb-lg-5 text-uppercase fw-bold'>
						Ужины
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
											<CardText className='text fs-3'>{dinner.price}</CardText>
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
					<h2 className='text fs-1 mb-4 mb-lg-5'>Десерты</h2>
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
											<CardText className='text fs-3'>{dessert.price}</CardText>
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
