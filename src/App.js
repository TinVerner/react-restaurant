import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
	return (
		<div>
			<Navbar expand='lg' className='fixed-top bg-body-tertiary shadow'>
				<Container>
					<Navbar.Brand>
						<Link to='/' className='brand-name fw-semibold'>
							Kaori Mau
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='w-100'>
							<Nav.Link href='/' className='active text-uppercase'>
								Главная
							</Nav.Link>
							<Nav.Link href='/menu' className='active text-uppercase'>
								Меню
							</Nav.Link>
							<Nav.Link href='/about' className='active text-uppercase'>
								О нас
							</Nav.Link>
							<Nav.Link href='/contact' className='active text-uppercase'>
								Контакты
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>

			<footer className='text-center'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-4'>
							<ul className='footer-list fw-bold'>
								<h1 className='fw-bold'>Компания</h1>
								<li>
									<a href='https://yandex.ru/maps/157/minsk/?ll=27.551120%2C53.892004&mode=poi&poi%5Bpoint%5D=27.550970%2C53.891949&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D195002189457&z=21'>
										Адрес: ул. Кирова 1, Минск, Беларусь
									</a>
								</li>
								<li>
									<a href='tel:88005553535'>Телефон: 8-800-555-35-35</a>
								</li>
								<li>
									<a href='mailto:KaoriMau@gmail.com'>
										Email: KaoriMau@gmail.com
									</a>
								</li>
							</ul>
						</div>
						<div className='col-md-4'>
							<ul className='footer-list'>
								<li>Ссылка 4</li>
								<li>Ссылка 5</li>
								<li>Ссылка 6</li>
							</ul>
						</div>
						<div className='col-md-4'>
							<ul className='footer-list'>
								<li>Ссылка 7</li>
								<li>Ссылка 8</li>
								<li>Ссылка 9</li>
							</ul>
						</div>
					</div>
				</div>
				<p className='p-3 m-0 text-center'>© made by Tin Verner</p>
			</footer>
		</div>
	)
}
