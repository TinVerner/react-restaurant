import React from 'react'
import { MenuBtn } from '../components/MenuBtn'
import './Home.css'
import AboutImg from '../utils/img/about-img.jpg'
import { Link } from 'react-router-dom'
import { ImageGallery } from '../components/ImageGallery'
import { ContactInfo } from '../components/ContactInfo'
import ContactImage from '../utils/img/contact-img.jpg'

function Home() {
	return (
		<div className='home-page'>
			<header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
							<h2 className='mb-0 text-black fw-bold'>Добро пожаловать в</h2>
							<h1 className='mb-5 text-black fw-bold text-center text-sm-start'>
								Kaori Mau Restaurant
							</h1>
							<MenuBtn />
						</div>
					</div>
				</div>
			</header>

			<div className='container my-5'>
				<div className='row'>
					<div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
						<img src={AboutImg} className='img-fluid w-50' alt='about img' />
					</div>
					<div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
						<h2 className='fs-1 mb-5 text-uppercase fw-bold'>О нас</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
							harum quo maiores sed voluptas delectus praesentium quam inventore
							omnis explicabo.
						</p>
						<p className='mb-5'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos
							quam autem, similique quaerat optio impedit nostrum aliquam quod
							consequuntur, doloremque accusamus voluptatibus, dolore nihil?
							Porro alias hic ea? Quasi!
						</p>
						<Link to='/about'>
							<button type='button' className='btn btn-outline-success btn-lg'>
								Подробнее о нас
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className='menu-section py-5 text-light shadow'>
				<div className='container d-flex flex-column align-items-center'>
					<h2 className='fs-1 mb-5 text-uppercase fw-bold'>Our Favorites</h2>
					<div className='row mb-5 w-100'>
						<div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
							<h3 className='fs-2 mb-5'>Еда</h3>
							<ul className='px-0'>
								<li className='d-flex justify-content-between'>
									<p className='fs-3 mx-2'>Dish 1</p>
									<p className='fs-3 mx-2 text-success fw-nold'>12 BYN</p>
								</li>
								<li className='d-flex justify-content-between'>
									<p className='fs-3 mx-2'>Dish 2</p>
									<p className='fs-3 mx-2 text-success fw-nold'>15 BYN</p>
								</li>
								<li className='d-flex justify-content-between'>
									<p className='fs-3 mx-2'>Dish 3</p>
									<p className='fs-3 mx-2 text-success fw-nold'>18 BYN</p>
								</li>
							</ul>
						</div>

						<div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
							<h3 className='fs-2 mb-5'>Напитки</h3>
							<ul className='px-0'>
								<li className='d-flex justify-content-between'>
									<p className='fs-3 mx-2'>Drink 1</p>
									<p className='fs-3 mx-2 text-success fw-nold'>5 BYN</p>
								</li>
								<li className='d-flex justify-content-between'>
									<p className='fs-3 mx-2'>Drink 2</p>
									<p className='fs-3 mx-2 text-success fw-nold'>7 BYN</p>
								</li>
								<li className='d-flex justify-content-between'>
									<p className='fs-3 mx-2'>Drink 3</p>
									<p className='fs-3 mx-2 text-success fw-nold'>4 BYN</p>
								</li>
							</ul>
						</div>
					</div>
					<MenuBtn />
				</div>
			</div>
			<ImageGallery />

			<div className='bg-dark text-light py-5 shadow'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
							<ContactInfo />
						</div>
						<div className='col-lg-6 d-flex justify-content-center'>
							<img src={ContactImage} className='img-fluid w-50' alt='' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
