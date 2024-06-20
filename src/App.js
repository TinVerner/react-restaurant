import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
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
						<Link to='/' className='navbar-brand text-success fw-semibold'>
							Kaori Mau Restaurant
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto justify-end w-100'>
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

			<footer className='bg-body-tertiary'>
				<p className='p-3 m-0 text-center'>copyright @ made by Tin Verner</p>
			</footer>
		</div>
	)
}
