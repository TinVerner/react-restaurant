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
									Внутри всё чисто, красиво и стильно. Есть гардероб. Персонал
									вежливый, доброжелательный. Еда очень вкусная, порции
									приличные, цены приемлимые.
								</CardText>
							</div>
						</CardBody>
						<CardFooter className='d-flex align-items-center'>
							<img
								src={Person1}
								className='img-fluid rounded-circle mx-3 shadow'
								alt=''
							/>
							<CardTitle className='text-success'>Анастасия</CardTitle>
						</CardFooter>
					</Card>
				</div>

				<div className='col-lg-6'>
					<Card className='h-100 shadow'>
						<CardBody>
							<div className='p-4'>
								<CardText>
									Отмечали День Рождение, безумно красивый интерьер, всё было
									очень вкусно и быстро приготовлено, хочется отметить просто
									замечательное обслуживание, супер приветливый персонал! Даже
									за случайно принесенное не то блюдо и быстро переделанное,
									принесли десерт в подарок.
								</CardText>
							</div>
						</CardBody>
						<CardFooter className='d-flex align-items-center'>
							<img
								src={Person2}
								className='img-fluid rounded-circle mx-3 shadow'
								alt=''
							/>
							<CardTitle className='text-success'>Игорь</CardTitle>
						</CardFooter>
					</Card>
				</div>

				<div className='col-lg-6'>
					<Card className='h-100 shadow'>
						<CardBody>
							<div className='p-4'>
								<CardText>
									Вкусно. Обслуживание отличное. Произошла небольшая неприятная
									ситуация, но персонал прекрасно из нее вышел. Так как нужно.
									Без конфликта, а с достоинством и с уважением к своему гостю.
									Даже не смотря на то, что произошло, приду ещё.
								</CardText>
							</div>
						</CardBody>
						<CardFooter className='d-flex align-items-center'>
							<img
								src={Person3}
								className='img-fluid rounded-circle mx-3 shadow'
								alt=''
							/>
							<CardTitle className='text-success'>Владислав</CardTitle>
						</CardFooter>
					</Card>
				</div>

				<div className='col-lg-6'>
					<Card className='h-100 shadow'>
						<CardBody>
							<div className='p-4'>
								<CardText>
									Были приятно удивлены вкусной едой и хорошим сервисом. По
									началу смутило расположение, и поэтому были скептически
									настроены, но все было здорово. Меню оказалось очень
									интересным, что бывает не часто.
								</CardText>
							</div>
						</CardBody>
						<CardFooter className='d-flex align-items-center'>
							<img
								src={Person4}
								className='img-fluid rounded-circle mx-3 shadow'
								alt=''
							/>
							<CardTitle className='text-success'>Екатерина</CardTitle>
						</CardFooter>
					</Card>
				</div>
			</div>
		</div>
	)
}
