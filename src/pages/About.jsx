import React from 'react'
import './About.css'
import AboutChef1 from '../utils/img/chef1.jpg'
import AboutChef2 from '../utils/img/chef2.jpg'
import { ImageGallery } from '../components/ImageGallery'
import { Reviews } from '../components/Reviews'

function About() {
	return (
		<div className='about-page'>
			<header className='mt-5'>
				<div className='container h-100 d-flex align-items-center justify-content-center'>
					<h1 className='text-light'>О нас</h1>
				</div>
			</header>

			<div className='container my-5'>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quasi
					illo est quaerat ab cumque provident illum laudantium laboriosam aut
					necessitatibus, excepturi quidem cum amet rerum in odio ratione natus
					doloremque exercitationem repellat fugit earum eaque. Minus, saepe.
					Tenetur laborum quis dolores blanditiis eos possimus earum facere,
					delectus nostrum quaerat?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ratione
					consequuntur, officiis id alias qui atque? Distinctio rem possimus
					ullam dolorum tempore. In magni eius laborum incidunt aliquam nemo
					autem a molestias sed, iure explicabo tempora amet delectus? Magnam
					architecto tempore id explicabo excepturi voluptas sed quasi
					aspernatur quos magni. Architecto ipsam ullam voluptas maxime unde
					repellendus rem accusamus porro nostrum, iusto itaque laboriosam
					inventore animi ad, alias sequi? Aut, nam aperiam. Enim libero error
					explicabo voluptatibus! Accusamus, consectetur laborum.
				</p>

				<div className='row'>
					<div className='col-lg-6'>
						<img src={AboutChef1} className='img-fluid my-4' alt='' />
					</div>
					<div className='col-lg-6'>
						<img src={AboutChef2} className='img-fluid my-4' alt='' />
					</div>
				</div>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
					sint hic obcaecati quo distinctio qui quod exercitationem maiores sunt
					aspernatur sed aut, praesentium ipsa a aperiam repellendus asperiores
					eos assumenda quas dolore, fugit expedita harum totam quia? Libero
					modi ipsum quasi cum incidunt numquam, sequi dolore ratione quos sunt.
					A doloribus iste dignissimos qui maiores blanditiis est iusto?
					Expedita odio obcaecati porro pariatur ea totam maiores culpa hic
					fugit doloremque quam debitis labore natus laborum accusamus id nihil
					facilis voluptatem eius, aliquam animi! Quaerat, quam libero eveniet
					error quisquam quod.
				</p>
			</div>

			<div className='bg-dark text-light'>
				<ImageGallery />
			</div>

			<div className='my-5'>
				<Reviews />
			</div>
		</div>
	)
}

export default About
