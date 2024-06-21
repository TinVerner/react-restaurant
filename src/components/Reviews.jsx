import './Reviews.css'
import React from 'react'
import {
	Card,
	CardBody,
	CardText,
	CardFooter,
	CardTitle,
} from 'react-bootstrap'
import Person1 from '../utils/img/person1.jpg'
import Person2 from '../utils/img/person2.jpg'
import Person3 from '../utils/img/person3.jpg'
import Person4 from '../utils/img/person4.jpg'

export function Reviews() {
	return (
		<div className='reviews-section container'>
			<h2 className='text-center mb-5 text-uppercase fw-bold fs-1'>Отзывы</h2>
			<div className='row g-4'>
				<div className='col-lg-6'>
					<Card className='h-100 shadow'>
						<CardBody>
							<div className='p-4'>
								<CardText>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
									neque dolore tempora libero labore deleniti nemo perspiciatis
									tempore nesciunt quasi.
								</CardText>
							</div>
						</CardBody>
						<CardFooter className='d-flex align-items-center'>
							<img
								src={Person1}
								className='img-fluid rounded-circle mx-3 shadow'
								alt=''
							/>
							<CardTitle className='text-success'>Name1</CardTitle>
						</CardFooter>
					</Card>
				</div>

				<div className='col-lg-6'>
					<Card className='h-100 shadow'>
						<CardBody>
							<div className='p-4'>
								<CardText>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Ratione maxime quaerat consequuntur rem porro quisquam, natus
									molestiae alias? Sed, assumenda.
								</CardText>
							</div>
						</CardBody>
						<CardFooter className='d-flex align-items-center'>
							<img
								src={Person2}
								className='img-fluid rounded-circle mx-3 shadow'
								alt=''
							/>
							<CardTitle className='text-success'>Name2</CardTitle>
						</CardFooter>
					</Card>
				</div>

				<div className='col-lg-6'>
					<Card className='h-100 shadow'>
						<CardBody>
							<div className='p-4'>
								<CardText>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
									facilis itaque neque inventore, illo molestias obcaecati
									dolore dicta exercitationem fugiat.
								</CardText>
							</div>
						</CardBody>
						<CardFooter className='d-flex align-items-center'>
							<img
								src={Person3}
								className='img-fluid rounded-circle mx-3 shadow'
								alt=''
							/>
							<CardTitle className='text-success'>Name3</CardTitle>
						</CardFooter>
					</Card>
				</div>

				<div className='col-lg-6'>
					<Card className='h-100 shadow'>
						<CardBody>
							<div className='p-4'>
								<CardText>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Dignissimos quam deleniti veniam reiciendis repudiandae
									cupiditate fugiat eos possimus facere soluta.
								</CardText>
							</div>
						</CardBody>
						<CardFooter className='d-flex align-items-center'>
							<img
								src={Person4}
								className='img-fluid rounded-circle mx-3 shadow'
								alt=''
							/>
							<CardTitle className='text-success'>Name4</CardTitle>
						</CardFooter>
					</Card>
				</div>
			</div>
		</div>
	)
}
